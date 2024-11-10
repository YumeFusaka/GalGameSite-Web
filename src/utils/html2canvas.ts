import html2canvas from 'html2canvas';
import { ElMessage } from 'element-plus';
import Canvas2Image from '@/utils/canvas2image';

const download = (downloadContent: any) => {
  var width = downloadContent.offsetWidth;
  var height = downloadContent.offsetHeight;
  // var canvas = document.createElement('canvas')
  // var scale = 2
  // canvas.width = width * 2
  // canvas.height = height * scale
  // canvas.getContext('2d').scale(scale, scale)
  var opts = {
    width: width,
    height: height,
    allowTaint: true,
    // canvas: canvas,
    // 日志开关，便于查看html2canvas的内部执行流程
    // logging: true,
    backgroundColor: null,
    useCORS: true
  }
  html2canvas(downloadContent, opts).then((canvas) => {
    var context = canvas.getContext('2d')
    // 【重要】关闭抗锯齿
    // context.mozImageSmoothingEnabled = false
    // context.webkitImageSmoothingEnabled = false
    // context.msImageSmoothingEnabled = false
    // context.imageSmoothingEnabled = false

    // var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height);
    // // 下载图片
    // let a = document.createElement('a');
    // document.body.appendChild(a);
    // a.href = img!.src;
    // // 设置下载标题
    // a.download = "galgameTierMaker";
    // a.click();
    // 将 canvas 转为图片的 URL 并下载
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'GalgameTierMaker.png';
    link.click();
  })
}

export default download