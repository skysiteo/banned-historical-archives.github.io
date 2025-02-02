---
name: 自动化OCR录入
about: 自动化OCR录入
title: '[自动化文稿录入]标题'
labels: ''
assignees: ''
---

**===== 自动化文稿录入使用说明 =====**

按照以下标准进行自动化文稿录入，随后机器人会生成对应的 pull request，通过审核后将会生成对应文稿页面。

1. 填写标题（注意 issue 的标题仅用于展示，自动化录入程序以下方参数中的 title 为准）
2. 参考完整的例子（）填写 issue 最下方的参数，可以使用 cnocr 的在线页面调试不同参数 https://huggingface.co/spaces/breezedeus/cnocr

完整的例子:

```
{
  source_name: '毛泽东全集第一卷', // 来源文件，书籍，数据库，报纸等等
  archive_id: 1, // 子仓库id，banned-historical-archives[id]，默认为 1
  articles: [{
    title: '在中央政治局会议上的讲话',
    authors: ['毛泽东', '江青'], // 作者
    tags: [{
      name: '北京',
      type: 'place'
    }], // 可选， type: articleCategory = '文稿大类', articleType = '文稿类型', place = '地点', character = '人物', issuer = '发行方/出版方', subject = '主题/事件', recorder = '记录', reviewer = '审核', translator = '翻译', reprint = '翻印/传抄',
    dates: [
      {
        year: 1949,
        month: 10,
        day: 1,
      },
      {
        year: 1976,
        month: 10,
        day: 1,
      },
    ], // 时间 或者 时间范围 或者 多个时间点
    is_range_date: false, // 默认为false，如果为 true 表示一段时间（从49年到76年），如果为false表示多/单个时间点
    alias: '', // 标题别名
    page_start: 1, // 从图片集第一张到第五张，如果是图片集不填表示从第一张到最后一张，如果是pdf，必须填写page_start和page_end
    page_end: 5,
    ocr: {
      min_box_size: 20
    }, // 此参数将继承全局ocr参数并覆盖（此参数优先级更高），默认为空
    ocr_exceptions: {
      "3": {
        content_thresholds: [0.2, 0.2, 0.1, 0.1],
        // ...其他ocr参数（可选）
      },
    } // 默认为空
  }],
  ocr: { // ocr 参数 以及 默认参数
    rec_model: 'ch_ppocr_mobile_v2.0',
    rec_backend: 'onnx',
    det_model: 'ch_PP-OCRv3_det',
    det_backend: 'onnx',
    resized_shape: 1496, // 在OCR前resize到这个尺寸，这个参数仅影响识别效果，识别结果的坐标仍是取决于原图像尺寸
    box_score_thresh: 0.3,
    min_box_size: 10,
    auto_vsplit: true, // 用于分页或者处理特殊的排版。如果为 ture，当页面宽度大于高度时，将ocr结果中页面中间(vsplit的位置)分开
    vsplit: 0.5, // 如果设置为0.5，ocr结果将从页面宽度的50%处分割，如果为0表示不分割。当auto_vsplit为false且vsplit不为0时，表示任何页面都进行分割。
    content_thresholds: [0.0, 0.0, 0.0, 0.0], // 通常需要忽略在页面边缘的页眉，页码或者噪声，数组内4个数值分别表示上下左右相对于宽高的比例， 例如 [0.1,0,0,0] 表示忽略顶部占总高度百分之10的内容
    line_merge_threshold: 30, // 单位像素，如果小于这个阈值将被视为同一行
    standard_paragraph_merge_strategy_threshold: 0, // 标准段落合并策略，0表示禁用（请在标准和差分策略中二选一），如果是0.2，当一行中最左侧的x坐标超过页面宽度的20%表示新段落，否则向上一行合并
    differential_paragraph_merge_strategy_threshold: 30, // 差分段落合并策略，0表示禁用，如果为30，这一行的最左侧的x坐标减去上一行的最左侧的x坐标大于30像素 而且 这一行的最左侧的x坐标减去下一行的最左侧的x坐标大于30像素 时表示这一行是新的段落，否则向上一行合并
  },
  ocr_exceptions: {
    "3": {
      content_thresholds: [0.2, 0.2, 0.1, 0.1],
      // ...其他ocr参数（可选）
    },
  } // 例外， 比如第三页的ocr参数与其他页面不同，默认为空
    // 此参数将继承全局ocr参数和article中的ocr参数，并覆盖（此参数优先级更高），默认为空
}
```

3. 在 issue 的最后上传图片或 pdf。如果上传图片请保持图片格式的统一，全使用 jpg 或者全使用 png。如果上传 pdf，目前只能接受单个 pdf 文件。多个 pdf 建议合并后再上传。

**===== 以上为使用说明(建议删除) =====**

```
{
  source_name: '毛泽东全集第一卷', // 来源文件名称，书籍，数据库，报纸等等
  archive_id: 1,
  articles: [{
    title: '在中央政治局会议上的讲话',
    authors: ['毛泽东', '江青'], // 作者
    page_start: 1,
    page_end: 5,
    dates: [
      {
        year: 1949,
        month: 10,
        day: 1,
      },
    ],
  }]
}
```

<此处上传图片/pdf。如果超过 25mb 可以先上传到自己的仓库，然后在这里用 markdown 填写文件的 url>
