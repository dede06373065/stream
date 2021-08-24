//复制文件
const fs=require('fs')
const path=require('path')
const fileName=path.resolve(__dirname,'data.txt')
const fileName1=path.resolve(__dirname,'data1.txt')
const readStream=fs.createReadStream(fileName)
const writeStream=fs.createWriteStream(fileName1)
readStream.pipe(writeStream)
readStream.on('data',chunk=>{
    console.log(chunk.toString())
})//一点点读取，完成时输出
readStream.on('end',()=>{
    console.log('copy done')
})