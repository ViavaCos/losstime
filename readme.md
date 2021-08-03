# losstime
Calculate how long a time stamp has passed.

```javascript
losstime(timestamp, config)
```

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| timestamp | · A timestamp and type is `Number`.<br />· **Not required.**<br />· Default value: `Date.now()` |
| config    | · A configure and type is `Object`.<br />· **Not required.**<br />· Default value:<br />{ day: '天', hour: '小时', minutes: '分钟', before: '之前', justNow: '刚刚' } |



## Example

```javascript
losstime() // "刚刚";

var oneMinutes = 60 * 1000;
var oneHour = 1 * 60 * oneMinutes;
var oneDay = 24 * oneHour;

losstime(Date.now() - oneDay) // "1天之前"
losstime(Date.now() - (oneDay + oneHour)) // "1天1小时之前"
losstime(Date.now() - (oneDay + oneHour + oneMinutes)) // "1天1小时1分钟之前"
```



## Tips

Currently only Chinese is supported. 

But you can internationalize it by passing in `config` parameters.

