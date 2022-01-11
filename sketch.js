let nothing = [];
let nox = [];
let nox2 = [];
let nox3 = [];

function setup() {
  createCanvas(1200, 1120);

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
  for (let p = 0; p < 12; p++) {  // 12字 用印
    let pp = p * random(0, 100);
    let qq = p * random(0, 100);
    for (let i = 0; i < 3; i++) {  //3個字
      let k = 0;
      while (k < 12) {        // 12筆畫
        if (random(0, 1) < 0.57) {
          m = round(random(0, 11));
        } else {
          m = k;
        }
        nox3[k + 12 * i + 12 * 3 * p] = new Caligraphy(
          nothing.r[k],
          nothing.theta[k],
          nothing.stoke[m],
          nothing.centre[0] + 40 - 10 * i + pp - 0.2 * qq,
          nothing.centre[1] + 950 + 20 * i - qq + 0.2 * pp,
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

  for (i = 0; i < nothing.stoke.length; i++) {
    let k = 0;
    while (k < 12) {
      if (random(0, 1) < 0.61) {
        nox2[12 * i + k].show();
      } else {
      }
      k = k + 1;
    }
  }


  let k = 431;
  while (k > 5* 12) {
    if (random(0, 1) < 0.78) {
      nox3[k].stamp();
    } else {
    }
    k = k -1;
  }



  for (p = 0; p < 12; p++) {
    for (i = 0; i < nothing.stoke.length; i++) {
      let k = 0;
      while (k < 12) {
        if (random(0, 1) < 1 - p / 32 - i / 32) {
          nox[i + 12 * k + p * 12 * 12].show();
        } else {
        }
        k = k + 1;
      }
    }
  }




  for (let k=60; k<1140;k+=5){
    for (let p=30;p<1060;p+=5){
      cc=255;
      fill(cc);
      //ellipse(k,p,random(0,4))
    }
  }

  while (k >0) {
    if (random(0, 1) < 0.78) {

      nox3[k].stamp();
      //nox3[k].show();
    } else {
    }
    k = k -1;
  }



  //  print("p",p);
  //  print("i",i);
  //  print("k",k)
  noLoop();
  //print(nox[1]);
  //save("nothing2_010422");
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
  show() {
    noStroke();
    let c = this.c;
    if (c == 255) {
    } else {
      colorMode(HSB, 100);
      c = color((0 * 100) / 360, 90, 70);
      fill(c);
    }
    let x, y, w;
    w = 3 + (this.w / 110) * random(0, 2) + (this.w / 110) * random(0, 2);
    if (this.stoke == "pie") {
      for (let i = 0; i < round(116 * (this.w / 110)); i+=2) {
        let x = this.xpos - i * 2;
        let y = this.ypos + i * 2;
        fill(c)
        ellipse(x, y, 1*(w+random(0,5)));
      }
      for (let i = 0; i < round(116 * (this.w / 110)); i+=2){
        let x = this.xpos - i * 2;
        let y = this.ypos + i * 2;
        fill(0)
        ellipse(x, y, 1*(w+random(0,18)));
        //  print("pie", y);
      }
    } else if (this.stoke == "heng") {
      for (let i = 0; i < round(120 * (this.w / 110)); i+=2) {
        let x = this.xpos + i * 2;
        let y = this.ypos + i * 0;
        fill(c)
        ellipse(x, y, 1*(w+random(0,5)));
      }
      for (let i = 0; i < round(120 * (this.w / 110)); i+=2){
        let x = this.xpos + i * 2;
        let y = this.ypos + i * 0;
        fill(0)
        ellipse(x, y, 1*(w+random(0,5)));

        //  print("heng", w);
      }
    } else if (this.stoke == "shu") {
      for (let i = 0; i < round(75 * (this.w / 110)); i+=2) {
        let x = this.xpos + i * 0;
        let y = this.ypos + i * 2;
        fill(c)
        ellipse(x, y, 1*(w+random(0,5)));
      }
      for (let i = 0; i < round(75 * (this.w / 110)); i+=2) {
        let x = this.xpos + i * 0;
        let y = this.ypos + i * 2;
        fill(0)
        ellipse(x, y, 1*(w+random(0,18)));
        //   print("shu", w);
      }
    } else if (this.stoke == "dian") {
      for (let i = 0; i < round(60 * (this.w / 110)); i+=2) {
        let x = this.xpos + i * 0;
        let y = this.ypos + i * 2;
        fill(c)
        ellipse(x, y, 1*(w+random(0,5)));
      }
      for (let i = 0; i < round(40 * (this.w / 110)); i+=random(2,5)) {
        let x = this.xpos + i * 0;
        let y = this.ypos + i * 2;
        // fill(0);
        stroke(0)
        noFill()
        ellipse(x, y, 1*(w+random(0,6)));
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
    if (m <0.1){

      stroke(c);
      strokeWeight(random(0.2,3));
      noFill(c);

      for (let k =0;k<stampdepth;k++ ){
        let  ww=this.w+random(0,20);
        let xx= this.xpos+k*stampspace*gx;
        let yy=this.ypos-k*stampspace*gy;
        circle(xx , yy, ww);

      }
    }
    else if (m<0.2&m>0.1){
      stroke(c);
      strokeWeight(random(0.2,3))
      noFill(c);
      for (let k =0;k<stampdepth;k++ ){
        let  ww=this.w+random(0,20);
        let xx= this.xpos+k*stampspace*gx;
        let yy=this.ypos-k*stampspace*gy;
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
        ellipse(xx, yy, ww+random(0,3),ww+random(0,3));
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
        ellipse(xx, yy, ww+random(0,3),ww+random(0,3));
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
        ellipse(xx, yy, ww+random(0,3),ww+random(0,3));
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
        ellipse(xx, yy, ww+random(0,3),ww+random(0,3));
      }
        // noErase();
        //    print("dian", w);
      }
    } else {
    }
  }
}
