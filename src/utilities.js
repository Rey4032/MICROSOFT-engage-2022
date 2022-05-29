// Define our labelmap
const labelMap = {
    1:{name:'1', color:'red'},
    2:{name:'2', color:'yellow'},
    3:{name:'3', color:'lime'},
    4:{name:'4', color:'blue'},
    5:{name:'5', color:'red'},
    6:{name:'6', color:'yellow'},
    7:{name:'7', color:'lime'},
    8:{name:'8', color:'blue'},
    9:{name:'9', color:'red'},
   

}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}