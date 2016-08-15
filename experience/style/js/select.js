        
$(function(){
    var oS=document.getElementById('province');
    var arr=['北京市','上海市','天津市','重庆市','河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','内蒙古','广西','西藏','宁夏','新疆','台湾','香港','澳门'];
    for(var i=0;i<arr.length;i++){
        var oP=new Option(arr[i],arr[i]);
        oS.options.add(oP);
    }
    $('.number select').focus(function(){
        $(this).css('color','#000000');
    })

        cities = new Object(); 

    cities['北京市']=new Array('北京市'); 

    cities['上海市']=new Array('上海市'); 

    cities['天津市']=new Array('天津市'); 

    cities['重庆市']=new Array('重庆市'); 

    cities['河北省']=new Array("石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"); 

    cities['山西省']=new Array("太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"); 

    cities['辽宁省']=new Array("沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"); 

    cities['吉林省']=new Array("长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"); 

    cities['黑龙江省']=new Array("哈尔滨市","齐齐哈尔市","鹤岗市","双鸭山市","鸡西市","大庆市","伊春市","牡丹江市","佳木斯市","七台河市","黑河市","绥化市","大兴安岭地区"); 

    cities['江苏省']=new Array("南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"); 

    cities['浙江省']=new Array("杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"); 

    cities['安徽省']=new Array("合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","巢湖市","六安市","亳州市","池州市","宣城市"); 

    cities['福建省']=new Array("福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"); 

    cities['江西省']=new Array("南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"); 

    cities['山东省']=new Array("济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","荷泽市"); 

    cities['河南省']=new Array("郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市"); 

    cities['湖北省']=new Array("武汉市","黄石市","十堰市","宜昌市","襄樊市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","仙桃市","潜江市","天门市","神农架林区"); 

    cities['湖南省']=new Array("长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"); 

    cities['广东省']=new Array("广州市","深圳市","珠海市","汕头市","韶关市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"); 

    cities['海南省']=new Array('海口市', '三亚市'); 

    cities['四川省']=new Array("成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"); 

    cities['贵州省']=new Array("贵阳市","六盘水市","遵义市","安顺市","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"); 

    cities['云南省']=new Array("昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","思茅市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"); 

    cities['陕西省']=new Array("西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"); 

    cities['甘肃省']=new Array("兰州市","金昌市","白银市","天水市","嘉峪关市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"); 

    cities['青海省']=new Array("西宁市","海东地区","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"); 

    cities['内蒙古']=new Array('呼和浩特', '包头', '乌海', '赤峰', '呼伦贝尔盟', '兴安盟', '哲里木盟', '锡林郭勒盟', '乌兰察布盟', '鄂尔多斯', '巴彦淖尔盟', '阿拉善盟'); 

    cities['广西']=new Array("南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"); 

    cities['西藏']=new Array("拉萨市","昌都地区","山南地区","日喀则地区","那曲地区","阿里地区","林芝地区"); 

    cities['宁夏']=new Array("银川市","石嘴山市","吴忠市","固原市","中卫市"); 

    cities['新疆']=new Array('乌鲁木齐', '克拉玛依', '喀什', '阿克苏', '和田', '吐鲁番', '哈密', '博尔塔拉', '昌吉', '巴音郭楞', '伊犁', '塔城', '阿勒泰'); 
    cities['台湾']=new Array('台北','台南','其他'); 

    cities['香港']=new Array('香港'); 

    cities['澳门']=new Array('澳门'); 
    var city=document.getElementById('city');
        oS.onchange=function(){
              set_city(this, city);  
        }
    function set_city(province, city) 

    { 

    var pv, cv; 

    var i, ii; 

    pv=province.value; 

    cv=city.value; 

    city.length=1; 

    if(pv=='0') return; 

    if(typeof(cities[pv])=='undefined') return; 

    for(i=0; i<cities[pv].length; i++) 

    { 

    ii = i+1; 

    city.options[ii] = new Option(); 

    city.options[ii].text = cities[pv][i]; 

    city.options[ii].value = cities[pv][i]; 

    } 

    }     
})
    