  let nothing = [];
  let nox = [];
  let nox2 = [];
  let nox3 = [];
  let s=[];
  let a=[];
  let b=[];

  function setup() {
    createCanvas(1164, 1120-64);
  //  randomSeed(919);

    nothing.stoke = [
      "pie",
      "heng",
      "heng",
      "shu",
      "shu",
      "shu",
      "shu",
      "heng",
      "dian",
      "dian",
      "dian",
      "dian",
    ];

    nothing.xpos = [40, 50, 35, 40, 55, 70, 90, 33, 33, 50, 70, 90];
    nothing.ypos = [15, 15, 35, 30, 30, 30, 30, 50, 65, 65, 65, 62];
    nothing.r = [0.5, 0.4, 0.4, 0.4, 0.3, 0.2, 0.2, 0.5, 0.6, 0.4, 0.4, 0.6];
    nothing.theta = [320, 315, 280, 295, 305, 0, 45, 245, 225, 200, 165, 130];
    nothing.centre = [50, 55];
    nothing.width = [110+20];
    nothing.c = [255, 133];


  a[0]=1;
  a[1]=1;
  a[2]=1;
  a[3]=1;
  a[4]=1;
  a[5]=1;
  a[6]=0;
  a[7]=0;
  a[8]=1;
  a[9]=1;
  a[10]=1;
  s[0]=(a[0]+a[3])%2;
   for(n=0;n<1023;n++){

     b[10]=(a[0]+a[3])%2;
     b[9]=a[10];
     b[8]=a[9];
     b[7]=a[8];
     b[6]=a[7];
     b[5]=a[6];
     b[4]=a[5];
     b[3]=a[4];
     b[2]=a[3];
     b[1]=a[2];
     b[0]=a[1];
   s[n+1]=(a[0]+a[3])%2;
     a[10]=b[10];
     a[9]=b[9];
     a[8]=b[8];
     a[7]=b[7];
     a[6]=b[6];
     a[5]=b[5];
     a[4]=b[4];
     a[3]=b[3];
     a[2]=b[2];
     a[1]=b[1];
     a[0]=b[0];

   }
   console.log(s)




    //十二列字
    for (p = 0; p < 12; p++) {
      // 一列十二個字
      for (i = 0; i < 12; i++) {
        let k = 0;
        let m = 0;
        // 十二筆畫
        while (k < 12) {
          if (random(0, 1) < 0.27) {
            m = round(11 * random(0, 1));
          } else {
            m = k;
          }
          nox[p * 12 * 12 + 12 * i + k] = new Caligraphy(
            nothing.r[k],
            nothing.theta[k],
            nothing.stoke[m],
            nothing.centre[0] + 1200 - 90 * p - 120,
            nothing.centre[1] + 90 * i,
            nothing.width[0],
            nothing.c[0]
          );
          //   print("p", p);
          //  print("i", i);
          //  print("k", k);

          k = k + 1;
        }
      }
    }

    //落款
    for (let p = 0; p < 1; p++) {
      for (let i = 0; i < 12; i++) {
        let k = 0;
        let m = 0;
        //十二個筆畫
        while (k < 12) {
          if (random(0, 1) < 0.7) {
            m = round(random(0, 11));
          } else {
            m = k;
          }
          nox2[12 * i + k + 12 * 12 * p] = new Caligraphy(
            nothing.r[k],
            nothing.theta[k],
            nothing.stoke[m],
            nothing.centre[0],
            nothing.centre[1] - 35 + 300 + 62 * (i + 12 * p),
            nothing.width[0] * 0.3,
            nothing.c[0]
          );
          // print("i", i);
          // print("k", k);
          k = k + 1;
        }
      }
    }
    // 12字 用印
    for (let p = 0; p < 12; p++) {
      let pp = p * random(0, 100);
      let qq = p * random(0, 100);
      for (let i = 0; i < 12; i++) {  //3個字
        let k = 0;
        while (k < 12) {        // 12筆畫
          if (random(0, 1) < 0.47) {
            m = round(random(0, 11));
          } else {
            m = k;
          }
          nox3[k + 12 * i + 12 * 12 * p] = new Caligraphy(
            nothing.r[k],
            nothing.theta[k],
            nothing.stoke[m],
            nothing.centre[0] + 40 - random(-1,1)*10 * i + random(-1,1)*pp - 0.2 * qq,
            nothing.centre[1] + 950 + random(-1,1)*20 * i - random(-1,1)*qq + 0.2 * pp,
            nothing.width[0] * random(0.2, 1.5),
            nothing.c[1]
          );

          k = k + 1;
        }
      }
    }
  }

  function draw() {
    background(0);
    // print(nothing.xpos[1]);
    // print(nothing.stoke.length);
    // print(nothing);

  let pieweight= random(3,35);
  let piestyle =random(0,1);
  let pieyinyang =random(0.1,1);
  let hengweight= random(3,18.2);
  let hengstyle =random(0,1);
  let hengyinyang =random(0.1,1);
  let shuweight= random(2.2,32.2);
  let shustyle =random(0,1);
  let shuyinyang =random(0.1,1);
  let dianweight= random(1.2,8.2);
  let dianstyle =random(0,1);
  let dianyinyang =random(0.1,1);

  let pieweight2= random(3,25);
  let piestyle2 =random(0,1);
  let pieyinyang2 =random(0.1,1);
  let hengweight2= random(3,12.2);
  let hengstyle2 =random(0,1);
  let hengyinyang2 =random(0.1,1);
  let shuweight2= random(12.2,32.2);
  let shustyle2 =random(0,1);
  let shuyinyang2 =random(0.1,1);
  let dianweight2= random(1.2,8.2);
  let dianstyle2 =random(0,1);
  let dianyinyang2 =random(0.1,1);

  console.log(hengyinyang)
  let qq=0;
  //trivial fold
  // for (k=0;k<31;k++){
  //   fill(255)
  //
  //   for (p=0;p<33;p++){
  //     circle(64+33*p,64+31*k,s[1+p+31*k]*(32))
  //
  //
  //
  //   }
  // }
//save('MLStriv')

// math random
for (k=0;k<31;k++){
  fill(255)

  for (p=0;p<33;p++){
    circle(64+33*p,64+31*k,random([0,1])*(32))



  }
}
//save('MLSrandom')

//  chinese remainder theorem
// for (kk=0;kk<33;kk++){
//   qq=0
// while(qq<31){
//   p=(qq+31*kk)%33;
//   k=qq;
//   circle(64+33*p,64+31*k,s[qq+31*kk]*(32))
//   print(p,k)
//   qq=qq+1;
//   }
// }
// save("MLSCRT");

    //
    // for (i = 0; i < nothing.stoke.length; i++) {
    //   let k = 0;
    //   while (k < 12) {
    //     if (random(0, 1) < 0.61) {
    //       nox2[12 * i + k].show(pieweight2,piestyle2,pieyinyang2,hengweight2,hengstyle2,hengyinyang2,shuweight2,shustyle2,shuyinyang2,dianweight2,dianstyle2,dianyinyang2);
    //     } else {
    //     }
    //     k = k + 1;
    //   }
    // }
    //
    //
    //
    //
    //  let k = 12*12*12-1;
    // while (k > random(1,4)*12* 12) {
    //   if (random(0, 1) < 0.008) {
    //     nox3[k].stamp();
    //   } else {
    //   }
    //   k = k -1;
    // }
    //
    //
    //
    // for (p = 0; p < 12; p++) {
    //   for (i = 0; i < nothing.stoke.length; i++) {
    //     let k = 0;
    //     while (k < 12) {
    //       if (random(0, 1) < 1 - p / 32 - i / 32) {
    //         nox[i + 12 * k + p * 12 * 12].show(pieweight,piestyle,pieyinyang,hengweight,hengstyle,hengyinyang,shuweight,shustyle,shuyinyang,dianweight,dianstyle,dianyinyang);
    //       } else {
    //       }
    //       k = k + 1;
    //     }
    //   }
    // }
    //
    //
    //   // for (let k=60; k<1140;k+=5){
    //   //   for (let p=30;p<1060;p+=5){
    //   //     cc=255;
    //   //     stroke(255);
    //   //     strokeWeight(random(0.3,1));
    //   //     noFill()
    //   //     ellipse(k,p,random(0,2))
    //   //   }
    //   // }
    //
    //
    //
    // while (k >0) {
    //   if (random(0, 1) < 0.008*random(0.1,0.8)) {
    //
    //     nox3[k].stamp();
    //     //nox3[k].show();
    //   } else {
    //   }
    //   k = k -1;
    // }



    //  print("p",p);
    //  print("i",i);
    //  print("k",k)
    noLoop();
    //print(nox[1]);

  }

  class Caligraphy {
    constructor(r, theta, stoke, x1, y1, w, c) {
      let rr = r + randomGaussian(0, 0.1);
      let ttheta = theta + randomGaussian(0, 0.1);
      this.xpos = x1 + rr * sin((ttheta * PI) / 180) * 0.5 * w;
      this.ypos = y1 - rr * cos((ttheta * PI) / 180) * 0.5 * w;
      this.stoke = stoke;
      this.w = w;
      this.c = c;
    }
    show(pieweight,piestyle,pieyinyang,hengweight,hengstyle,hengyinyang,shuweight,shustyle,shuyinyang,dianweight,dianstyle,dianyinyang) {
      noStroke();
      let c = this.c;
      if (c == 255) {
      } else {
        colorMode(HSB, 100);
        c = color((0 * 100) / 360, 90, 70);
        //fill(c);
      }
      let x, y, w;
      w = 3 + (this.w / 110) * random(0, 2) + (this.w / 110) * random(0, 2);


      if (this.stoke == "pie") {
        let gradpieX=random(1,5) //avg 2
        let gradpieY=random(1,5) //avg 2
        let bubblesize=(w*random(4,20));
        for (let i = 0; i < round(66 * (this.w / 110)); i+=4*pieweight*random(0.9,1.5)) {
          let x = this.xpos - i * gradpieX+random(0,5);
          let y = this.ypos + i * gradpieY+random(0,5);

        //
        //   if(random(0,1)<0.3){
        //     strokeWeight(random(0.1,2))
        //     noFill()
        //   } else {
        //     noFill()
        //     strokeWeight(random(0.1,2))
        //     stroke(255 )
        //   }
        //   ellipse(x, y, (round(66 * (this.w / 110))-i)/round(66 *(this.w / 110))*bubblesize);
        // }

        if(random(0,1)<pieyinyang){
          fill(255)
          stroke(0)
          strokeWeight(random(0.1*pieweight,0.2*pieweight))

        } else {
       noFill()
          stroke(255 )
          //stroke(0)
          fill(0)
          strokeWeight(random(0.1*pieweight,0.2*pieweight))
        }

        if (piestyle<0.5){
        //  fill(255)
      } else if (piestyle<0.65){
        //  fill(0)
        }else {
          noFill()
        }
        let piesize= (round(66 * (this.w / 110))-i)/round(66 *(this.w/ 110))*(w+random(4,w*1.5*pieweight));
        rect(x, y,random(0.5,2)*piesize,random(0.5,2)*piesize);
      }
      for (let i = 0; i < round(66 * (this.w / 110)); i+=5*pieweight*random(1,1.5)){
        let x = this.xpos + i * 2+random(0,5);
        let y = this.ypos + i * 0+random(0,5);
    //    fill(255)
        strokeWeight(random(0.1,2))
        stroke(0)
        // noFill()
        rect(x, y, random(0.5,2)*(w+pieweight),random(0.5,2)*(w+pieweight));

        //  print("heng", w);
      }




        // for (let i = 0; i < round(106 * (this.w / 110)); i+=random(2,5)){
        //   let x = this.xpos - i * 2+random(0,5);
        //   let y = this.ypos + i * 2+random(0,5);
        //   //fill(0)
        //   strokeWeight(random(0.1,2))
        //   stroke(0)
        //   noFill()
        //   ellipse(x, y, 0.5*(w+random(0,38)));
        //   //  print("pie", y);
        // }


      } else if (this.stoke == "heng") {
        for (let i = 0; i < round(150 * (this.w / 110)); i+=5*hengweight*random(0.8,1.5)) {
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);

          if(random(0,1)<hengyinyang){

            stroke(0)
            strokeWeight(random(0.1*hengweight,0.2*hengweight))

          } else {
         noFill()

            stroke(255)
            fill(0)
            strokeWeight(random(0.1*hengweight,0.2*hengweight))
          }

          if (hengstyle<0.3){
          //  fill(255)
        } else if (hengstyle<0.45){
          //  fill(0)
          }else {
            noFill()
          }
          line(x, y, x+1*(w*random(4,w+2*hengweight)),y);
        }
        for (let i = 0; i < round(150 * (this.w / 110)); i+=8*hengweight*random(0.8,1.5)){
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);
      //    fill(255)
          strokeWeight(random(0.1,2))
          stroke(0)
          // noFill()
          line(x, y, x+1*(w*random(4,w+2*hengweight)),y);
          //  print("heng", w);
        }




      } else if (this.stoke == "shu") {
        for (let i = 0; i < round(75 * (this.w / 110));  i+=4*shuweight*random(0.8,1.5)) {
          let x = this.xpos + i * 0+random(0,5);
          let y = this.ypos + i * 2+random(0,5);


          if(random(0,1)<1){

            stroke(0)
            fill(255)
            strokeWeight(random(0.1*shuweight,0.2*shuweight))

          } else {
         noFill()

            stroke(255)
            fill(0)
            strokeWeight(shuweight*random(0.1,1))
          }

          if (shustyle<0.3){
          //  fill(255)
        } else if (shustyle<0.65){
          //  fill(0)
          }else {
            noFill()
          }
          line(x, y,x+ 0*(w+random(4,w+2*shuweight)),y+1*(w+random(4,w+2*shuweight)));
        }
        for (let i = 0; i < round(75 * (this.w / 110)); i+=6*shuweight*random(0.8,1.5)){
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);
      //    fill(255)
          strokeWeight(shuweight*random(0.1,1))
          stroke(0)
          // noFill()
          line(x, y,x+ 0*(w+random(4,w+2*shuweight)),y+5*(w+random(4,w+2*shuweight)));

          //   print("shu", w);
        }



      } else if (this.stoke == "dian") {
        for (let i = 0; i < round(15 * (this.w / 110)); i+=5*dianweight*random(0.8,1.5)) {
          let x = this.xpos + i * 0+random(0,5);
          let y = this.ypos + i * 2+random(0,5);


          if(random(0,1)<1){

            stroke(0)
            fill(255)
            strokeWeight(random(0.1*dianweight,0.2*dianweight))

          } else {
         noFill()

            stroke(255)
            fill(0)
            strokeWeight(random(0.1*dianweight,0.2*dianweight))
          }

          if (shustyle<0.15){
          //  fill(255)
        } else if (shustyle<0.25){
          //  fill(0)
          }else {
            noFill()
          }
          ellipse(x, y, 1*(w+random(1,w+2*dianweight)));
        }
        for (let i = 0; i < round(15 * (this.w / 110)); i+=9*dianweight*random(0.8,1.5)){
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);
      //    fill(255)
          strokeWeight(random(0.1,2))
          stroke(0)
          // noFill()
          ellipse(x, y, 1*(w+random(1,w+2*dianweight)));

          //    print("dian", w);
        }
      } else {
      }
    }

    stamp() {
      let stampdepth= random(3,6);
      let c = this.c;
      if (c == 255) {
      } else {
        colorMode(HSB, 100);
        c = color((0 * 100) / 360, 90, 70, 128);
      }
      noStroke();
      let stampspace =60;
      let gg = random(0,1);
      let gx,gy;
      if (gg < 0.5){
         gx=1;
         gy=1;
      }
      else if (gg < 0.8) {
        gx= 3;
        gy =0;
      }
      else {
        gx=0;
        gy=3;
      }

      let m= random(0,2)
      if (m <0.6){

        stroke(c);
        strokeWeight(random(0.2,3));
        noFill(c);

        for (let k =0;k<stampdepth;k++ ){
          let  ww=this.w+random(3,20);
          let xx= this.xpos+k*stampspace*gx+random(1,130);
          let yy=this.ypos-k*stampspace*gy+random(1,130);
          circle(xx , yy, ww);

        }
      }
      else if (m<1&m>0.4){
        stroke(c);
        strokeWeight(random(0.2,3))
        noFill(c);
        for (let k =0;k<stampdepth;k++ ){
          let  ww=this.w+random(3,20);
          let xx= this.xpos+k*stampspace*gx+random(1,130);
          let yy=this.ypos-k*stampspace*gy+random(1,130);
          rect(xx, yy, ww,ww);
        }
      }
      else {
        noStroke();
      }

      let x, y, w;
      w = 3 + (this.w / 110) * random(0, 2) + (this.w / 110) * random(0, 2);
      if (this.stoke == "pie") {
        for (let i = 0; i < round(6 * (this.w / 110)); i++) {
          let x = this.xpos - i * 2;
          let y = this.ypos + i * 2;


          //  erase();

          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }

          // noErase();
          //  print("pie", y);
        }
      } else if (this.stoke == "heng") {
        for (let i = 0; i < round(20 * (this.w / 110)); i++) {
          let x = this.xpos + i * 2;
          let y = this.ypos + i * 0;

          fill(c);
          //  erase();
          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }
          //  noErase();
          //  print("heng", w);
        }
      } else if (this.stoke == "shu") {
        for (let i = 0; i < round(5 * (this.w / 110)); i++) {
          let x = this.xpos + i * 0;
          let y = this.ypos + i * 2;

          fill(c);
          //  erase();
          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }
          //   noErase();
          //   print("shu", w);
        }
      } else if (this.stoke == "dian") {
        for (let i = 0; i < round(3 * (this.w / 110)); i++) {
          let x = this.xpos + i * 0;
          let y = this.ypos + i * 2;

          fill(c);
          //  erase();
          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }
          // noErase();
          //    print("dian", w);
        }
      } else {
      }
    }
  }
