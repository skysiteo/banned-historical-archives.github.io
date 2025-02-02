export default {
  entity: {
    id: 'e487fb9e-647d-4d48-ba9d-908ccd014457',
    name: '红旗一九五九年第三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/e487fb9e-647d-4d48-ba9d-908ccd014457.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '福斯特同志给毛泽东同志的信',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 10,
        dates: [{ year: 1958, month: 12, day: 19 }],
      },
      {
        title: '共产主义的胜利步伐',
        authors: ['“和平和社会主义问题”社论'],
        page_start: 11,
        page_end: 18,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '十分指标，十二分措施，二十四分干劲',
        authors: ['《红旗》杂志编辑部'],
        page_start: 19,
        page_end: 21,
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '发扬群众路线和实事求是的作风',
        authors: ['舒同'],
        page_start: 22,
        page_end: 27,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '让农民群众来揭开土壤的秘密',
        authors: ['刘瑞龙'],
        page_start: 28,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '建立我国的农产化学工业',
        authors: ['彭涛'],
        page_start: 33,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '高唐县人民公社是怎样大办工业的',
        authors: ['宋乃德'],
        page_start: 37,
        page_end: 42,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '老爷爷',
        authors: ['闻捷'],
        page_start: 43,
        page_end: 43,
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '铁匠（木刻）',
        authors: ['蒋正鸿'],
        page_start: 43,
        page_end: 43,
        dates: [{ year: 1959, month: 2 }],
      },
      {
        title: '人民公社办工业（木刻）',
        authors: ['莫测'],
        page_start: 40,
        page_end: 40,
        dates: [{ year: 1959, month: 2 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/e487fb9e-647d-4d48-ba9d-908ccd014457.pdf',
};
