/**
 * 对象合并
 * @param {Object} origin 源对象
 * @param {Object} target 目标对象
 * @returns {Object} 合并之后的新对象
 */
function _mergeObj (origin, target) {
    var obj = {}
    for (var key in target) {
        if(origin[key] !== undefined) {
            obj[key] =   origin[key]
        } else {
            obj[key] = target[key]
        }
    }
    return obj
}

function losstime(time, config) {
    time = (Date.now() - time) / 1000;
    var day = Math.floor(time / (24 * 3600));
    var hours = Math.floor(time % (24 * 3600) / 3600);
    var minutes = Math.floor(time % (24 * 3600) % 3600 / 60);

    var timeStr = '';
    var flag = false;

    var baseConfig = {
        day: '天',
        hour: '小时',
        minutes: '分钟',
        before: '之前',
        justNow: '刚刚'
    }

    var _config = config instanceof Object ? _mergeObj(config, baseConfig) : baseConfig

    if (day > 0) {
        timeStr += day + _config.day;
        flag = true;
    }

    if (hours > 0) {
        timeStr += hours + _config.hour;
        flag = true;
    }

    if (minutes > 0) {
        timeStr += minutes + _config.minutes;
        flag = true;
    }

    timeStr += _config.before;

    if (!flag) {
        timeStr = _config.justNow;
    }

    return timeStr;
}

module.exports.losstime = losstime;