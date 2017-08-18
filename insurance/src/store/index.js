import Vue from "vue"
import Vuex from "vuex"

import products from "./modules/products"
Vue.use( Vuex )

export default new Vuex.Store({
  modules: {
    products
  }
})



// {
//     "count": "34",
//     "list": [
//         {
//             "product_id": "37",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "熊孩子监护人责任险",
//             "plan_title": "",
//             "cover": "http://files.huizecdn.com/file1/M00/32/FC/wKgls1gudqOAZ1JBAAEkENTjaEA701.jpg",
//             "features": "熊娃闯祸责任人保障,人身、财产全覆盖,有娃一族量身定做",
//             "price": "38.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "36",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“欣享百万”意外保障计划",
//             "plan_title": "尊贵计划-B",
//             "cover": "http://files.huizecdn.com/file1/M00/4A/A0/wKgls1imke-AQ6cRAAY85dQrIEs348.jpg",
//             "features": "6款计划适用不同需求,意外医疗无免赔,意外风险保障全面",
//             "price": "972.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "35",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“欣享百万”意外保障计划",
//             "plan_title": "尊贵计划-A",
//             "cover": "http://files.huizecdn.com/file1/M00/4A/A0/wKgls1imkjqAJXOhAAY85dQrIEs859.jpg",
//             "features": "6款计划适用不同需求,意外医疗无免赔,意外风险保障全面",
//             "price": "860.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "34",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“欣享百万”意外保障计划",
//             "plan_title": "卓越计划-B",
//             "cover": "http://files.huizecdn.com/file1/M00/4A/A1/wKgls1imlJCAPm0gAAY85dQrIEs243.jpg",
//             "features": "6款计划适用不同需求,意外医疗无免赔,意外风险保障全面",
//             "price": "550.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "33",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“欣享百万”意外保障计划",
//             "plan_title": "卓越计划-A",
//             "cover": "http://files.huizecdn.com/file1/M00/4A/A1/wKgls1imlLyAb4oPAAY85dQrIEs126.jpg",
//             "features": "6款计划适用不同需求,意外医疗无免赔,意外风险保障全面",
//             "price": "445.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "32",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“欣享百万”意外保障计划",
//             "plan_title": "优选计划-B",
//             "cover": "http://files.huizecdn.com/file1/M00/4A/A0/wKgls1imkteAI_w6AAY85dQrIEs791.jpg",
//             "features": "6款计划适用不同需求,意外医疗无免赔,意外风险保障全面",
//             "price": "425.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "31",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“欣享百万”意外保障计划",
//             "plan_title": "优选计划-A",
//             "cover": "http://files.huizecdn.com/file1/M00/4A/A0/wKgls1imkpqAa2hKAAY85dQrIEs372.jpg",
//             "features": "6款计划适用不同需求,意外医疗无免赔,意外风险保障全面",
//             "price": "315.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "30",
//             "cat_id": "1100",
//             "subcat_id": "1101",
//             "title": "“欣享康健”重大疾病保险",
//             "plan_title": "经济版",
//             "cover": "http://files.huizecdn.com/file1/M00/5A/E7/wKgls1kIFQ6AWoTdAACkRgbjNLw485.jpg",
//             "features": "小保费大保障,一年期重疾保障首选,三档计划适合不同需求",
//             "price": "160.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "29",
//             "cat_id": "1100",
//             "subcat_id": "1101",
//             "title": "“欣享康健”重大疾病保险",
//             "plan_title": "基础版",
//             "cover": "http://files.huizecdn.com/file1/M00/5A/E7/wKgls1kIFR-AZ_y2AACkRgbjNLw235.jpg",
//             "features": "小保费大保障,一年期重疾保障首选,三档计划适合不同需求",
//             "price": "80.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "28",
//             "cat_id": "1100",
//             "subcat_id": "1101",
//             "title": "“欣享康健”重大疾病保险",
//             "plan_title": "优选版",
//             "cover": "http://files.huizecdn.com/file1/M00/5A/E7/wKgls1kIFS6ASe6HAACkRgbjNLw479.jpg",
//             "features": "小保费大保障,一年期重疾保障首选,三档计划适合不同需求",
//             "price": "240.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "27",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“年年无忧”综合意外险",
//             "plan_title": "白金计划",
//             "cover": "http://files.huizecdn.com/file1/M00/5C/AC/wKgls1kRbh-AflC7AAEM1Oq8Gi0053.jpg",
//             "features": "投保人群范围广,保费低性价比高,意外医疗0免赔,支持叮咚闪赔",
//             "price": "100.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "26",
//             "cat_id": "1100",
//             "subcat_id": "1102",
//             "title": "一起慧99-百万医疗险  有门诊计划",
//             "plan_title": "",
//             "cover": "http://files.huizecdn.com/file1/M00/6D/D5/wKgls1lxh4uANGqlAAJ25ym8mU0939.png",
//             "features": "零免赔一分钱也能报,普通门急诊也能报,社保外用药可报销,可连续投保到99周岁",
//             "price": "1129.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "25",
//             "cat_id": "1100",
//             "subcat_id": "1102",
//             "title": "一起慧99-百万医疗保险 无门诊计划",
//             "plan_title": "",
//             "cover": "http://files.huizecdn.com/file1/M00/5B/7C/wKgls1kKox-AZdHcAAKL1nyQ4ek391.png",
//             "features": "零免赔一分钱也能报,社保外用药可报销,可连续投保到99周岁,支持叮咚闪赔",
//             "price": "279.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "24",
//             "cat_id": "1400",
//             "subcat_id": "1401",
//             "title": "“账户保”个人账户资金安全险",
//             "plan_title": "",
//             "cover": "http://files.huizecdn.com/file1/M00/3A/0D/wKgls1hKTZaAY21rAAU3T16D1xM721.jpg",
//             "features": "低保费、高保障,涵盖账户类型全面,一次购买保障1年",
//             "price": "6.00",
//             "sale_num": "0"
//         },
//         {
//             "product_id": "23",
//             "cat_id": "1000",
//             "subcat_id": "1001",
//             "title": "“安心无忧”意外保障计划",
//             "plan_title": "豪华款",
//             "cover": "http://files.huizecdn.com/file1/M00/5A/1A/wKgls1kBYQuADYPVAATJabkcei0033.jpg",
//             "features": "综合意外保障首选,小保费大保障,意外医疗0元免赔",
//             "price": "180.00",
//             "sale_num": "0"
//         }
//     ]
// }