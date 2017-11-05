/**
 * 接口数据函数对象封装,需安装node模块axios
 * @author yangyunlog
 */
(function(window){
    let a = {
        H:"http://127.0.0.1",    //域名
        login:'login',    //登录api
    };

    /**
     * 获取指定成员属性的url
     * @param uri 指定成员属性
     * @return string url
     */
    a.U = function(uri) {return this.H + '/' + this[uri];};
    
    /**
    * 创建数据对象
    * @param object 数据对象
    * @return FormData 数据对象
    */
    a.D = object => {
        const fd = new FormData();
        if ('object' === typeof object) {
            for (let k in object) {
                if (
                    'object' === typeof object[k] 
                    && 
                    'file' === k
                    &&
                    a.isSet(object[k].data)
                    &&
                    a.isSet(object[k].name)
                ) {    //判断是否为文件对象
                    fd.append(k, object[k].data, object[k].name);
                } else {
                    fd.append(k, object[k]);
                }
            }
        }
        return fd;
    }

    /**
    * 判断给定的值是否存在
    * @param value 数据对象
    * @return boolean true/false
    */
    a.isSet = value => {
        if ('undefined' !== typeof value && '' !== value && null !== value && 0 !== value) return true;
        return false;
    }

    window.api = a,
    window.axios = require('axios');
})(window);