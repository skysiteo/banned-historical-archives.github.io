export default {
  entity: {
    id: 'b566462e-6304-4239-8fb6-30ca5afe41e6',
    name: '红旗一九五八年第十一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b566462e-6304-4239-8fb6-30ca5afe41e6.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '毛泽东同志论帝国主义和一切反动派都是纸老虎',
        authors: ['《人民日报》编辑部'],
        page_start: 3,
        page_end: 16,
        dates: [{ year: 1958, month: 10, day: 27 }],
      },
      {
        title: '更高地举起十月革命的红旗',
        authors: ['《红旗》杂志编辑部'],
        page_start: 17,
        page_end: 19,
        dates: [{ year: 1958 }],
      },
      {
        title: '积极开展农村的社会主义和共产主义教育运动',
        authors: ['张承先'],
        page_start: 20,
        ocr_exceptions: {
          '20': { content_thresholds: [0.1, 0.18, 0.18, 0.1], vsplit: 0 },
        },
        page_end: 23,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1958 }],
      },
      {
        title: '驳“习惯论”',
        authors: ['方克'],
        page_start: 24,
        ocr: { vsplit: 0.35 },
        page_end: 24,
        dates: [{ year: 1958 }],
      },
      {
        title: '论“社大官小”',
        authors: ['徐金学'],
        page_start: 25,
        page_end: 25,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1958 }],
      },
      {
        title: '为钢而战 分秒必争',
        authors: ['谷受民', '李杰', '白良玉'],
        page_start: 26,
        page_end: 28,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1958 }],
      },
      {
        title: '把街道居民组织到生产劳动中去',
        authors: ['郑季翘'],
        page_start: 29,
        page_end: 32,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1958 }],
      },
      {
        title: '小学也能实行勤工俭学',
        authors: ['中共吉林省委会'],
        page_start: 33,
        ocr: { vsplit: 0.35 },
        page_end: 35,
        dates: [{ year: 1958 }],
      },
      {
        title: '迷信四窟',
        authors: ['范文澜'],
        page_start: 35,
        ocr: { vsplit: 0.35 },
        page_end: 36,
        dates: [{ year: 1958 }],
      },
      {
        title: '苦战十个月 跨过几世纪',
        authors: ['李定坤'],
        page_start: 37,
        ocr: { vsplit: 0.35 },
        page_end: 40,
        dates: [{ year: 1958 }],
      },
      {
        title: '大跃进重的乌审旗牧民',
        authors: ['孟和博彦'],
        page_start: 40,
        ocr: { vsplit: 0.35 },
        page_end: 43,
        dates: [{ year: 1958 }],
      },
    ],
    ocr: {
      auto_vsplit: false,
      vsplit: 0,
      content_thresholds: [0, 0.185, 0, 0.1],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b566462e-6304-4239-8fb6-30ca5afe41e6.pdf',
};
