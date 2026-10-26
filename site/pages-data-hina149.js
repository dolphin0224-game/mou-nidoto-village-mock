// GitHub Pages cannot set Content-Encoding for Unity gzip files.
// Stream the unchanged gzip payload from <100 MB parts and decode in-browser.
(() => {
 const nativeFetch=window.fetch.bind(window);
 window.fetch=async function(input,init){
  const url=new URL(typeof input==='string'||input instanceof URL?input:input.url,location.href);
  if(!url.pathname.endsWith('/NightVillage-WebGL-20261026-hina149.data.gz'))return nativeFetch(input,init);
  if(typeof DecompressionStream==='undefined')throw new Error('最新のChromeまたはEdgeで開いてください。');
  const manifestResponse=await nativeFetch(new URL('../data-parts-hina149.json',url),{signal:init?.signal});
  if(!manifestResponse.ok)throw new Error('データ一覧を取得できませんでした');
  const manifest=await manifestResponse.json();
  let index=0,reader=null;
  const stream=new ReadableStream({
   async pull(controller){
    try{
     while(true){
      if(!reader){
       if(index>=manifest.parts.length){controller.close();return;}
       const part=await nativeFetch(new URL('../'+manifest.parts[index++],url),{signal:init?.signal});
       if(!part.ok)throw new Error('ゲームデータ取得失敗 '+part.status);
       reader=part.body.getReader();
      }
      const {value,done}=await reader.read();
      if(done){reader.releaseLock();reader=null;continue;}
      controller.enqueue(value);return;
     }
    }catch(error){controller.error(error);}
   },
   cancel(reason){return reader?.cancel(reason);}
  });
  return new Response(stream.pipeThrough(new DecompressionStream('gzip')),{headers:{'Content-Type':'application/octet-stream'}});
 };
})();
