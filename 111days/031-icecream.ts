import { readFileSync } from 'fs'

const flavors = readFileSync('./111days/data/31flavor.txt', 'utf-8')
  .trim()
  .split('\n')
const words = `アンド
いちご
うさぎ
オア
オーレ
オレンジ
カーニバル
カスタルト
キーライム
キャラメル
キャンディ
クイーン
クーラー
グローブ
グレープ
ココナッツ
コットン
コーヒー
サーティワン
さくら
シャーベット
ショコラ
ジャモカ
チーズケーキ
チップ
トースト
ドリーム
ナイト
ナッツ
ネオン
バーガンディ
バニ
バニラ
パイ
パイナップル
パチキャン
パチパチ
ハート
バター
ピーチ
ピンク
ビータ
フィーユ
フレンチ
フルーツ
プリン
ブラック
ブルーベリー
ベリーベリー
ホワイト
マスクメロン
マロン
ムース
ミント
ミルク
ミルフィーユ
メロー
モンスター
ヨーグピーチ
ラズベリー
ラブ
ラム
レーズン
レコード
レモン
ロード
ワールド
ワンダーランド
杏仁豆腐
大納言
抹茶
小倉
新作
春
特濃ミルク
日向夏
鶴姫の贈り物`.split('\n')

const getWordFrequency = (flavors: string[], words: string[]) => {
  const frequency = new Map<string, number>()
  for (const word of words) {
    frequency.set(word, 0)
  }
  for (const flavor of flavors) {
    for (const word of words) {
      if (flavor.includes(word)) {
        frequency.set(word, (frequency.get(word) || 0) + 1)
      }
    }
  }
  return frequency
}

const res = getWordFrequency(flavors, words)

Array.from(res.entries())
  .sort((a, b) => b[1] - a[1])
  .forEach(([word, count]) => {
    console.log(`${word}: ${count}`)
  })
