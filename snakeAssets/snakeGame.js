window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
px=py=10;
gs=23;
tc=22  ;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
function game() {
    px+=xv;
    py+=yv;
    if(px<-1) {
        px=py=10;
        gs=23;
        tc=22;
        ax=ay=15;
        xv=yv=0;
        trail=[];
        tail = 5;
    }
    if(px>tc) {
        px=py=10;
        gs=23;
        tc=22;
        ax=ay=15;
        xv=yv=0;
        trail=[];
        tail = 5;
    }
    if(py<-1) {
        px=py=10;
        gs=23;
        tc=22;
        ax=ay=15;
        xv=yv=0;
        trail=[];
        tail = 5;
    }
    if(py>tc) {
        px=py=10;
        gs=23;
        tc=22;
        ax=ay=15;
        xv=yv=0;
        trail=[];
        tail = 5;
    }
    ctx.fillStyle="lime";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="green";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            px=py=10;
            gs=23;
            tc=22;
            ax=ay=15;
            xv=yv=0;
            trail=[];
            tail = 5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
        trail.shift();
    }
 
    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 65:
            xv=-1;yv=0;
            break;
        case 87:
            xv=0;yv=-1;
            break;
        case 68:
            xv=1;yv=0;
            break;
        case 83:
            xv=0;yv=1;
            break;
    }
}