const fs = require('fs')
const path = require('path')
const { createCanvas, Image } = require('../export');
const canvas = createCanvas(40, 15)
const ctx = canvas.getContext('2d')

function spark(ctx, data) {
  var len = data.length
  var pad = 1
  var width = ctx.canvas.width
  var height = ctx.canvas.height
  var barWidth = width / len
  var max = Math.max.apply(null, data)

  ctx.fillStyle = 'rgba(0,0,255,0.5)'
  ctx.lineWidth = 1
  data.forEach(function (n, i) {
    var x = i * barWidth + pad
    var y = height * (n / max)

    ctx.lineTo(x, height - y)
    ctx.fillRect(x, height, barWidth - pad, -y)
  })

  ctx.strokeStyle = 'red'
  ctx.stroke()
}

spark(ctx, [1, 2, 4, 5, 10, 4, 2, 5, 4, 3, 3, 2])
canvas.createPNG("spark")
// canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'spark.png')))
