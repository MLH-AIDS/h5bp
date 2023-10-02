var Body=Body||Matter.body;
//var groupx=[Body.nextGroup(true)]
var toptions = {//贴图
    mubox0: {//0木框
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
          cutx: 679,
          cuty: 519,
          cutwidth: 110,
          cutheight: 110,
          xScale: 0.053,
          yScale: 0.053
        }
      }, collisionFilter: {
        //group: groupx[0],
      }, mass: 0.5//,isStatic: true 
    }, febox0:{//0铁框
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
          cutx: 681,
          cuty: 736,
          cutwidth: 110,
          cutheight: 110,
          xScale: 0.053,
          yScale: 0.053
        }
      },collisionFilter: {
        //group: groupx[1]
      }, mass: 1
    }, pig0: {//0猪
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",//pig.png
          cutx: 190,
          cuty: 330,
          cutwidth: 95,
          cutheight: 95,
          xScale: 0.05,
          yScale: 0.05
        }
      },collisionFilter: {
        //group: groupx[0]
      }, mass: 1,
      label: {name: "pig"}
    }, egg0:{//0鸟蛋
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
          cutx: 805,
          cuty: 0,
          cutwidth: 90,
          cutheight: 90,
          xScale: 0.05,
          yScale: 0.05
        }
      },collisionFilter: {
        //group: groupx[1],
      },mass: 0.5
    }, spring:{//0弹簧
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
          cutx: 611,
          cuty: 1102,
          cutwidth: 71,
          cutheight: 108,
          xScale: 0.04,
          yScale: 0.05
        }
      }
    }, muwheel0: {
        wsjx:{//0木轮 轮轴
          render: {
            sprite: {
              texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
              cutx: 1795,
              cuty: 1124,
              cutwidth: 111,
              cutheight: 88,
              xScale: 0.05,
              yScale: 0.04
            }
          }, collisionFilter: {
            //group: groupx[2]
          }
        }, wcircle:{//0木轮 轮圆
          render: {
            sprite: {
              texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
              cutx: 1197,
              cuty: 789,
              cutwidth: 72,
              cutheight: 72,
              xScale: 0.04,
              yScale: 0.04
            }
          }, collisionFilter: {
            //group: groupx[2],
          }, mass: 0.5
        }
    }, dp0:{//短喷 0
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
          cutx: 1236,
          cuty: 1109,
          cutwidth: 104,
          cutheight: 101,
          xScale: 0.05,
          yScale: 0.05
        }
      }, collisionFilter: {
        //group: Body.nextGroup(true),
      }, mass: 1
    }, pinkdp:{//粉色短喷
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas3.png",
          cutx: 376,
          cuty: 1117,
          cutwidth: 106,
          cutheight: 97,
          xScale: 0.04,
          yScale: 0.04
        }
      }, collisionFilter: {
        //group: -1,
      }, mass: 1,
      label:{
        name:"dpen"
      }
    }, tnt0:{//tnt
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/IngameAtlas.png",
          cutx: 681,
          cuty: 630,
          cutwidth: 106,
          cutheight: 106,
          xScale: 0.04,
          yScale: 0.04
        }
      }, collisionFilter: {
        //group: -1,
      }, mass: 1,
      label: {
        name:"TNT",
        erange:200,
        eforce:1
      }
    }, explodeball: {
      render: {
        sprite: {
          texture: "https://s1.imagehub.cc/images/2023/05/03/Particles_Sheet_01.png",
          cutx: 0,
          cuty: 260,
          cutwidth: 260,
          cutheight: 260,
          xScale: 1,
          yScale: 1
        }
      }
    }
};//贴图结束