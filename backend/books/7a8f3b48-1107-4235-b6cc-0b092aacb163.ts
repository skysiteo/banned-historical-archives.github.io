export default {
  entity: {
    id: '7a8f3b48-1107-4235-b6cc-0b092aacb163',
    name: '红旗一九六七年第十一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7a8f3b48-1107-4235-b6cc-0b092aacb163.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '毛泽东思想照亮了我们党胜利前进的道路——纪念中国共产党诞生四十六周年',
        authors: [],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1967 }],
      },
      {
        title: '缅甸的蒋介石——奈温军人政府必败！人民必胜！',
        alias: '一九六七年七月五日在北京举行的追悼刘逸烈士大会上的讲话',
        authors: ['德钦巴登顶'],
        page_start: 8,
        page_end: 14,
        dates: [{ year: 1967, month: 7, day: 5 }],
      },
      {
        title: '印度尼西亚人民团结起来，为推翻法西斯政权而斗争',
        authors: [],
        page_start: 15,
        page_end: 18,
        dates: [{ year: 1967 }],
      },
      {
        title: '印度尼西亚共产党中央政治局声明（摘要）',
        authors: ['印度尼西亚共产党中央政治局'],
        page_start: 19,
        page_end: 24,
        dates: [{ year: 1967, month: 8, day: 17 }],
      },
      {
        title: '印度尼西亚共产党中央政治局的自我批评（摘要）',
        authors: ['印度尼西亚共产党中央政治局'],
        page_start: 25,
        page_end: 36,
        dates: [{ year: 1967, month: 9 }],
      },
      {
        title: '实现革命的大联合必须打倒私字',
        authors: [],
        page_start: 37,
        page_end: 40,
        dates: [{ year: 1967 }],
      },
      {
        title: '依靠群众，实现革命的大联合',
        authors: ['中国人民解放军北京部队空军某部毛泽东思想宣传队'],
        page_start: 41,
        page_end: 43,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title: '实现革命的大联合，复课闹革命',
        authors: ['中国人民解放军海军某部驻北京八十九中军训团'],
        page_start: 44,
        page_end: 47,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title: '永保无产阶级的革命本色',
        authors: ['北京钟表厂红旗大队'],
        page_start: 48,
        page_end: 49,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title: '破私立公，才能掌好权用好权',
        authors: ['《新贵州报》革命委员会'],
        page_start: 50,
        page_end: 52,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title: '不折不扣地按党的政策办事',
        authors: ['中国人民解放军第二炮兵星火文工团文革筹委会'],
        page_start: 53,
        page_end: 56,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title: '高举革命大联合的旗帜',
        authors: ['洪平'],
        page_start: 57,
        page_end: 58,
        dates: [{ year: 1967 }],
      },
      {
        title: '坚决支持革命干部站出来',
        authors: ['洪晓斌'],
        page_start: 59,
        page_end: 61,
        dates: [{ year: 1967 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/7a8f3b48-1107-4235-b6cc-0b092aacb163.pdf',
};
