const postalCodes = {
  '00': '北海道',
  '01': '北海道',
  '02': '青森県',
  '03': '岩手県',
  '04': '宮城県',
  '05': '秋田県',
  '06': '山形県',
  '07': '福島県',
  '08': '茨城県',
  '09': '栃木県',
  10: '群馬県',
  11: '埼玉県',
  12: '千葉県',
  13: '東京都',
  14: '神奈川県',
  15: '新潟県',
  16: '富山県',
  17: '石川県',
  18: '福井県',
  19: '山梨県',
  20: '長野県',
  21: '岐阜県',
  22: '静岡県',
  23: '愛知県',
  24: '三重県',
  25: '滋賀県',
  26: '京都府',
  27: '大阪府',
  28: '兵庫県',
  29: '奈良県',
  30: '和歌山県',
  31: '鳥取県',
  32: '島根県',
  33: '岡山県',
  34: '広島県',
  35: '山口県',
  36: '徳島県',
  37: '香川県',
  38: '愛媛県',
  39: '高知県',
  40: '福岡県',
  41: '佐賀県',
  42: '長崎県',
  43: '熊本県',
  44: '大分県',
  45: '宮崎県',
  46: '鹿児島県',
  47: '沖縄県',
  48: '北海道',
  49: '北海道',
  50: '北海道',
  51: '北海道',
  52: '北海道',
  53: '北海道',
  54: '北海道',
  55: '北海道',
  56: '北海道',
  57: '北海道',
  58: '北海道',
  59: '北海道',
  60: '北海道',
  61: '北海道',
  62: '北海道',
  63: '北海道',
  64: '北海道',
  65: '北海道',
  66: '北海道',
  67: '北海道',
  68: '北海道',
  69: '北海道',
  70: '北海道',
  71: '北海道',
  72: '北海道',
  73: '北海道',
  74: '北海道',
  75: '北海道',
  76: '北海道',
  77: '北海道',
  78: '北海道',
  79: '北海道',
  80: '北海道',
  81: '北海道',
  82: '北海道',
  83: '北海道',
  84: '北海道',
  85: '北海道',
  86: '北海道',
  87: '北海道',
  88: '北海道',
  89: '北海道',
  90: '北海道',
  91: '北海道',
  92: '北海道',
  93: '北海道',
  94: '北海道',
  95: '北海道',
  96: '北海道',
  97: '北海道',
  98: '北海道',
  99: '北海道',
}

function getPrefecture(postalCode) {
  const prefix = postalCode.slice(0, 2)
  return postalCodes[prefix]
}

console.log(getPrefecture('470-0000'))

console.log('00', getPrefecture('000-0000') === '北海道') // '00' は北海道
console.log('01', getPrefecture('010-0000') === '北海道') // '01' は北海道
console.log('02', getPrefecture('020-0000') === '青森県') // '02' は青森県
console.log('03', getPrefecture('030-0000') === '岩手県') // '03' は岩手県
console.log('04', getPrefecture('040-0000') === '宮城県') // '04' は宮城県
console.log('05', getPrefecture('050-0000') === '秋田県') // '05' は秋田県
console.log('06', getPrefecture('060-0000') === '山形県') // '06' は山形県
console.log('07', getPrefecture('070-0000') === '福島県') // '07' は福島県
console.log('08', getPrefecture('080-0000') === '茨城県') // '08' は茨城県
console.log('09', getPrefecture('090-0000') === '栃木県') // '09' は栃木県
console.log('10', getPrefecture('100-0000') === '群馬県') // '10' は群馬県
console.log('11', getPrefecture('110-0000') === '埼玉県') // '11' は埼玉県
console.log('12', getPrefecture('120-0000') === '千葉県') // '12' は千葉県
console.log('13', getPrefecture('130-0000') === '東京都') // '13' は東京都
console.log('14', getPrefecture('140-0000') === '神奈川県') // '14' は神奈川県
console.log('15', getPrefecture('150-0000') === '新潟県') // '15' は新潟県
console.log('16', getPrefecture('160-0000') === '富山県') // '16' は富山県
console.log('17', getPrefecture('170-0000') === '石川県') // '17' は石川県
console.log('18', getPrefecture('180-0000') === '福井県') // '18' は福井県
console.log('19', getPrefecture('190-0000') === '山梨県') // '19' は山梨県
console.log('20', getPrefecture('200-0000') === '長野県') // '20' は長野県
console.log('21', getPrefecture('210-0000') === '岐阜県') // '21' は岐阜県
console.log('22', getPrefecture('220-0000') === '静岡県') // '22' は静岡県
console.log('23', getPrefecture('230-0000') === '愛知県') // '23' は愛知県
console.log('24', getPrefecture('240-0000') === '三重県') // '24' は三重県
console.log('25', getPrefecture('250-0000') === '滋賀県') // '25' は滋賀県
console.log('26', getPrefecture('260-0000') === '京都府') // '26' は京都府
console.log('27', getPrefecture('270-0000') === '大阪府') // '27' は大阪府
console.log('28', getPrefecture('280-0000') === '兵庫県') // '28' は兵庫県
console.log('29', getPrefecture('290-0000') === '奈良県') // '29' は奈良県
console.log('30', getPrefecture('300-0000') === '和歌山県') // '30' は和歌山県
console.log('31', getPrefecture('310-0000') === '鳥取県') // '31' は鳥取県
console.log('32', getPrefecture('320-0000') === '島根県') // '32' は島根県
console.log('33', getPrefecture('330-0000') === '岡山県') // '33' は岡山県
console.log('34', getPrefecture('340-0000') === '広島県') // '34' は広島県
console.log('35', getPrefecture('350-0000') === '山口県') // '35' は山口県
console.log('36', getPrefecture('360-0000') === '徳島県') // '36' は徳島県
console.log('37', getPrefecture('370-0000') === '香川県') // '37' は香川県
console.log('38', getPrefecture('380-0000') === '愛媛県') // '38' は愛媛県
console.log('39', getPrefecture('390-0000') === '高知県') // '39' は高知県
console.log('40', getPrefecture('400-0000') === '福岡県') // '40' は福岡県
console.log('41', getPrefecture('410-0000') === '佐賀県') // '41' は佐賀県
console.log('42', getPrefecture('420-0000') === '長崎県') // '42' は長崎県
console.log('43', getPrefecture('430-0000') === '熊本県') // '43' は熊本県
console.log('44', getPrefecture('440-0000') === '大分県') // '44' は大分県
console.log('45', getPrefecture('450-0000') === '宮崎県') // '45' は宮崎県
console.log('46', getPrefecture('460-0000') === '鹿児島県') // '46' は鹿児島県
console.log('47', getPrefecture('470-0000') === '沖縄県') // '47' は沖縄県
console.log('48', getPrefecture('480-0000') === '北海道') // '48' は北海道
console.log('49', getPrefecture('490-0000') === '北海道') // '49' は北海道
console.log('50', getPrefecture('500-0000') === '北海道') // '50' は北海道
console.log('51', getPrefecture('510-0000') === '北海道') // '51' は北海道
console.log('52', getPrefecture('520-0000') === '北海道') // '52' は北海道
console.log('53', getPrefecture('530-0000') === '北海道') // '53' は北海道
console.log('54', getPrefecture('540-0000') === '北海道') // '54' は北海道
console.log('55', getPrefecture('550-0000') === '北海道') // '55' は北海道
console.log('56', getPrefecture('560-0000') === '北海道') // '56' は北海道
console.log('57', getPrefecture('570-0000') === '北海道') // '57' は北海道
console.log('58', getPrefecture('580-0000') === '北海道') // '58' は北海道
console.log('59', getPrefecture('590-0000') === '北海道') // '59' は北海道
console.log('60', getPrefecture('600-0000') === '北海道') // '60' は北海道
console.log('61', getPrefecture('610-0000') === '北海道') // '61' は北海道
console.log('62', getPrefecture('620-0000') === '北海道') // '62' は北海道
console.log('63', getPrefecture('630-0000') === '北海道') // '63' は北海道
console.log('64', getPrefecture('640-0000') === '北海道') // '64' は北海道
console.log('65', getPrefecture('650-0000') === '北海道') // '65' は北海道
console.log('66', getPrefecture('660-0000') === '北海道') // '66' は北海道
console.log('67', getPrefecture('670-0000') === '北海道') // '67' は北海道
console.log('68', getPrefecture('680-0000') === '北海道') // '68' は北海道
console.log('69', getPrefecture('690-0000') === '北海道') // '69' は北海道
console.log('70', getPrefecture('700-0000') === '北海道') // '70' は北海道
console.log('71', getPrefecture('710-0000') === '北海道') // '71' は北海道
console.log('72', getPrefecture('720-0000') === '北海道') // '72' は北海道
console.log('73', getPrefecture('730-0000') === '北海道') // '73' は北海道
console.log('74', getPrefecture('740-0000') === '北海道') // '74' は北海道
console.log('75', getPrefecture('750-0000') === '北海道') // '75' は北海道
console.log('76', getPrefecture('760-0000') === '北海道') // '76' は北海道
console.log('77', getPrefecture('770-0000') === '北海道') // '77' は北海道
console.log('78', getPrefecture('780-0000') === '北海道') // '78' は北海道
console.log('79', getPrefecture('790-0000') === '北海道') // '79' は北海道
console.log('80', getPrefecture('800-0000') === '北海道') // '80' は北海道
console.log('81', getPrefecture('810-0000') === '北海道') // '81' は北海道
console.log('82', getPrefecture('820-0000') === '北海道') // '82' は北海道
console.log('83', getPrefecture('830-0000') === '北海道') // '83' は北海道
console.log('84', getPrefecture('840-0000') === '北海道') // '84' は北海道
console.log('85', getPrefecture('850-0000') === '北海道') // '85' は北海道
console.log('86', getPrefecture('860-0000') === '北海道') // '86' は北海道
console.log('87', getPrefecture('870-0000') === '北海道') // '87' は北海道
console.log('88', getPrefecture('880-0000') === '北海道') // '88' は北海道
console.log('89', getPrefecture('890-0000') === '北海道') // '89' は北海道
console.log('90', getPrefecture('900-0000') === '北海道') // '90' は北海道
console.log('91', getPrefecture('910-0000') === '北海道') // '91' は北海道
console.log('92', getPrefecture('920-0000') === '北海道') // '92' は北海道
console.log('93', getPrefecture('930-0000') === '北海道') // '93' は北海道
console.log('94', getPrefecture('940-0000') === '北海道') // '94' は北海道
console.log('95', getPrefecture('950-0000') === '北海道') // '95' は北海道
console.log('96', getPrefecture('960-0000') === '北海道') // '96' は北海道
console.log('97', getPrefecture('970-0000') === '北海道') // '97' は北海道
console.log('98', getPrefecture('980-0000') === '北海道') // '98' は北海道
console.log('99', getPrefecture('990-0000') === '北海道') // '99' は北海道
