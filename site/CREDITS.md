# Awakening_02 素材台帳

確認日：2026-10-11。新規の有料購入なし。下記はゲームの仮組みに実際に採用したもの。

|用途|素材・作者|条件と加工|選定根拠|
|---|---|---|---|
|玩具車|[Kenney Toy Car Kit](https://kenney.nl/assets/toy-car-kit)|CC0 1.0。6種のFBX、パレット画像。縮小・配置|幼い生活用品が夢の異常さを示す。シンプルな形状をプラスチック玩具として扱う|
|スイカ|[Kenney Food Kit](https://kenney.nl/assets/food-kit)|CC0 1.0。watermelon.fbx、パレット画像。約29cmに配置|陽菜が持ち込んだ小物。場面を変えず席上に置換|
|バス車内|[Bus Interior / joao44](https://freesound.org/people/joao44/sounds/781059/)|CC0 1.0。公開HQ MP3、ハイパス・ローパス・音量調整版|貸切バスの低い走行音。原音には他人の会話があるため帯域を制限|
|夏の環境|[Tokyo_Cicada.wav / sound pro](https://freesound.org/people/sound%20pro/sounds/483360/)|CC0 1.0。公開HQ MP3、モノ化・音量調整|「夏の日本・昼」の蝉。夜のコオロギで代用しない|
|落下風|[Heavy gusts of wind / SamsterBirdies](https://freesound.org/people/SamsterBirdies/sounds/565140/)|CC0 1.0。公開HQ MP3、帯域・音量調整|風の圧迫感を、背景の夢から目覚める瞬間へつなぐ|
|日常BGM|[Porch Swing Days - slower / Kevin MacLeod](https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100715)|[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。24〜111秒、抜粋・フェード・音量調整|明るく穏やかなアコースティック系。五人の気安い日常の仮選定|
|移行BGM|[Darkest Child / Kevin MacLeod](https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100783)|CC BY 4.0。140〜180秒、抜粋・フェード・音量調整|小さな高音と低音で境界感。恐怖の強度はユーザーが試聴して最終判断|
|昼のSkybox|[Kloofendal 48d Partly Cloudy Pure Sky / Greg Zaal, Jarod Guest](https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky)|[Poly Haven CC0](https://polyhaven.com/license)。1K HDR、露出・回転|昼の晴れ〜晴れ間のある雲。地上風景のないHDRIで村の地形と衝突しない|
|座り・運転|[Quaternius Universal Animation Library](https://quaternius.com/packs/universalanimationlibrary.html)|CC0。既存プロジェクトのFBXから5クリップ抽出|汎用Humanoidへリターゲット可能。元の座り姿勢を勝手に変更しないようミュートして配置|
|キャラ|既存Kei_Student / Noa_Student、作者iruka|ユーザー提供のプロジェクト内モデル。CC0素材として扱わない。02専用材質・役別Prefab|画風の連続性と既存Timelineの体格・配置を維持。完成モデルの代替とはしない|
|陽菜|既存Character_BodyMotion_v61|所有済みモデル。顔の基本描画と造形を保持、02専用ハイライトシェーダー|現在の見た目を基準に、変更量0では元の目を維持|
|積み木・独楽・風鈴音・微小演技|今回のオリジナル制作|形状・合成音・制御コードをプロジェクトに保存|玩具の種類と演技調整の受け皿を追加|
|夢のマットペイント、紙芝居3枚|OpenAI ImageGenで今回生成|2枚のPNG（紙芝居は3段アトラス）。依頼内容に合わせた仮原画|夢は村を直接見せない空、伝承は本文未確定なので村と森の情景に留める|

Freesoundのファイルはログインが必要な原WAVではなく、誰でも取得できるHQ MP3の同じCC0作品。オリジナル音質の収録データとは区別する。

Incompetechの無料ライセンスはクレジット条件付き。公式の[ライセンスページ](https://incompetech.com/music/royalty-free/licenses/)とカタログの記録を保存し、シーンに`Credits.txt`を組み込んだ。

## 仮音声

ローカルAivisSpeechで字幕から生成。クラウド音声APIや人の声のクローンは使用していない。

|役|モデル／スタイル|同梱モデルが示す条件|
|---|---|---|
|葵|にせ／ノーマル|ACML 1.0|
|陽菜|まお／ふつー|ACML 1.0|
|凌|M2／ノーマル|JVNV、CC BY-SA 4.0。生成した該当音声ファイルも同条件で提供|
|栞|花音／ノーマル|ACML 1.0|
|蓮|澤原 玄二郎／close|ACML 1.0|
|運転手|阿井田 茂／Calm|ACML 1.0|

各モデルのライセンス本文、台詞・生成ファイル・実測尺の対応は `Verification/Awakening02/Voice/` に保存。最終の声優・キャスティングではなく、間と会話の流れを見るための仮ボイス。

## 調べたが、そのまま置換しなかったもの

- 既存MakeHuman由来の葵・蓮・栞・律モデル：CC0由来のデータと従来の台帳はあるが、今回の陽菜とアニメ調の統一性が合わないため、このカットの主演モデルに採用しない。
- 無料VRoidモデル：一般のVRoidプリセットは広く利用できるが、配布モデルごとに条件が異なる。既存ユーザーモデルを継承し、他作者のキャラ設定を混ぜない。[公式ガイドライン](https://vroid.com/en/studio/guidelines)
- 汎用の座り全身モーション：素材は入れたが、身長・座面・肘位置の整合はユーザーの姿勢調整対象。自動で全員に再生するとカットの見え方が変わるため初期ミュート。

企画の一次参照：[『もう二度と』企画書_0.2](https://docs.google.com/document/d/1tUrSceGh4u0iqBAwJ5m41s0pYDWeAmQYLcG_XHKqbQQ/edit)。フィールドワーク、木隠れ／子隠れ、五人の性格・カット割りは本チャットの最新指定を優先。

## 共同確認版 r10b の配信
2026年10月20日の統合ビルドを、2026年10月26日に共有。背景の村配置・建物は本作の検証用制作。編集可能なモデルの配布ではありません。Unity 6000.5.0f1。
凌のM2生成音声はCC BY-SA 4.0で提供し、同じ音声ファイルを LicensedAudio/05_6585608d964d.wav に同梱しています。モデル・各音声の条件はLicensesを参照。


2026-10-26: 陽菜v149をゲーム・カットシーンへ統合。元モデルの権利と既存クレジットは継続。カットシーンの座り補正は本モック用。

2026-10-30: 陽菜の顔本体の裏面描画を無効化し、瞳の奥行き競合を修正。既存モデル・音声の権利とクレジットは継続。
