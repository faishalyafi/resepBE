const chai = require("chai");
const chaiHttp = require("chai-http");
const app = "http://localhost:5000";
const server = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);
chai.should();


// describe("Home", () => {
//   describe("/", () => {
//     it("should get userAdmin", function () {
//       chai
//         .request(server)
//         .get("/")
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a("object");
//         });
//     });
//   });
// });

describe("Auth", () => {
  // describe("Post/register", () => {
  //   it("should post register", () => {
  //     const user = {
  //       username: "slamet",
  //       email: "slamet@gmail.com",
  //       password: "admin",
  //     };
  //     chai
  //       .request(server)
  //       .post("/auth/register")
  //       .set("content-type", "application/x-www-form-urlencoded")
  //       .send(user)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //       });
  //   });
  // });
  // describe ("Post/login",()=>{
  //   it("should post login",()=>{
  //     const user = {
  //       username: "dwi",
  //       password: "dwi@dwi.com",
  //     };
  //     chai
  //     .request(server)
  //     .post("/auth/login")
  //     .set("content-type", "application/x-www-form-urlencoded")
  //     .send(user)
  //     .end((err, res) => {
  //       console.log(res);
  //       res.should.have.status(200);
  //       // res.body.should.be.a("object");
  //     });
  //   })
  // });
  // describe("Post/cekusername",()=>{
  //   it("should cekUsername",()=>{
  //     const user = {
  //       username: "admin"
  //     };
  //     chai
  //     .request(server)
  //     .post("/auth/cekusername")
  //     .set("content-type", "application/x-www-form-urlencoded")
  //     .send(user)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a("object");
  //     });
  //   })
  // });
  // describe("Post/cekemail",()=>{
  //   it("should cekEmail",()=>{
  //     const user = {
  //       email: "admin@gmail.com"
  //     };
  //     chai
  //     .request(server)
  //     .post("/auth/cekemail")
  //     .set("content-type", "application/x-www-form-urlencoded")
  //     .send(user)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a("object");
  //     });
  //   })
  // });
  // describe("Get/verify",()=>{
  //   it("should verify email",()=>{
  //     chai
  //     .request(server)
  //     .get("/auth/verify")
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.a("object");
  //     });
  //   });
  // });
  
});


// describe("Profile", () => {
    // it("should get userProfile", function () {
    //   const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudG9uIiwicGFzc3dvcmQiOiJhZG1pbiIsInJvbGUiOjIsImlhdCI6MTYzNjM0ODc4MX0.po6I67IUegg3PAwMj2SnYRSqeUlK1_nWH_CZypAUW28`
    //   chai
    //     .request(server)
    //     .get("/user/profile")
    //     .set({ "Authorization": `Bearer ${token}` })
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.body.should.be.a("object");
    //     });
    // });
  //   it("should update userProfile", function () {
  //     const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudG9uIiwicGFzc3dvcmQiOiJhZG1pbiIsInJvbGUiOjIsImlhdCI6MTYzNjM0ODc4MX0.po6I67IUegg3PAwMj2SnYRSqeUlK1_nWH_CZypAUW28`
  //     const user = {
  //       nama_lengkap: 'sumarmo',
  //       tempat: 'bali',
  //       tanggal: '25 juli 1991',
  //       alamat : 'semarang'
  //     }
  //     chai
  //       .request(server)
  //       .post("/user/profile")
  //       .set("content-type", "application/x-www-form-urlencoded")
  //       .set({ "Authorization": `Bearer ${token}` })
  //       .send(user)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //       });
  //   });
  // });

// describe("Content", () => {
  // describe("all content", () => {
  //   it("should get all content", () => {
  //     chai
  //       .request(server)
  //       .get("/content/")
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //       });
  //   });
  // });
  // describe("content by User", () => {
  //   it("should get all user content", () => {
  //     const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudG9uIiwicGFzc3dvcmQiOiJhZG1pbiIsInJvbGUiOjIsImlhdCI6MTYzNjM0ODc4MX0.po6I67IUegg3PAwMj2SnYRSqeUlK1_nWH_CZypAUW28`
  //     chai
  //       .request(server)
  //       .get("/content/user")
  //       .set({ "Authorization": `Bearer ${token}` })
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //       });
  //   });
  // });

  // describe("content by kategori", () => {
  //   it("should get all delicious content", () => {
  //     chai
  //       .request(server)
  //       .get("/content/delicious")
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //       });
  //   });
  //   it("should get all healty content", () => {
  //     chai
  //       .request(server)
  //       .get("/content/healthy")
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //       });
  //   });
  //   it("should get all inexpensive content", () => {
  //     chai
  //       .request(server)
  //       .get("/content/inexpensive")
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //       });
  //   });
  // });
  // describe("getWatch",()=>{
  //   it("should get watch content", () => {
  //         chai
  //           .request(server)
  //           .get("/content/617ba616e8a7330c2480b35c")
  //           .end((err, res) => {
  //             res.should.have.status(200);
  //             res.body.should.be.a("object");
  //           });
  //       });
  // })
  // describe("add",()=>{
  //     it("should add content", () => {
  //       const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudG9uIiwicGFzc3dvcmQiOiJhZG1pbiIsInJvbGUiOjIsImlhdCI6MTYzNjM0ODc4MX0.po6I67IUegg3PAwMj2SnYRSqeUlK1_nWH_CZypAUW28`
  //       const task = {
  //         "nama_resep": "nasi goreng",
  //         "kategori" : "delicious",
  //         "tag": ["makanan","minuman"],
  //         "deskripsi" : "merupakan makanan dari indonesia",
  //         "url" : "https://www.youtube.com/watch?v=a4d89xMoOrQ&ab_channel=12345",
  //         "bahan": [{"jenis":"nasi"},{"jenis":"rempah"}],
  //         "cara_buat":"Masukan rempah kedalam blender dan di blender"
  //     } 
  //           chai
  //             .request(server)
  //             .post("/content/add")
  //             .set("content-type", "application/x-www-form-urlencoded")
  //             .set({ "Authorization": `Bearer ${token}` })
  //             .send(task)
  //             .end((err, res) => {
  //               res.should.have.status(200);
  //               res.body.should.be.a("object");
  //             });
  //         });
  //   })

  // describe("update",()=>{
  //       it("should update content", () => {
  //         const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudG9uIiwicGFzc3dvcmQiOiJhZG1pbiIsInJvbGUiOjIsImlhdCI6MTYzNjM0ODc4MX0.po6I67IUegg3PAwMj2SnYRSqeUlK1_nWH_CZypAUW28`
  //         const task = {
  //           "nama_resep": "nasi goreng",
  //           "kategori" : "delicious",
  //           "tag": ["makanan","minuman"],
  //           "deskripsi" : "merupakan makanan dari indonesia",
  //           "url" : "https://www.youtube.com/watch?v=a4d89xMoOrQ&ab_channel=1111",
  //           "bahan": [{"jenis":"nasi"},{"jenis":"rempah"}],
  //           "cara_buat":"Masukan rempah kedalam blender dan di blender"
  //       } 
  //             chai
  //               .request(server)
  //               .post("/content/update")
  //               .set("content-type", "application/x-www-form-urlencoded")
  //               .set({ "Authorization": `Bearer ${token}` })
  //               .send(task)
  //               .end((err, res) => {
  //                 res.should.have.status(200);
  //                 res.body.should.be.a("object");
  //               });
  //           });
  //     })  

//   describe("Delete",()=>{
//       it("should delete content", () => {
//             chai
//               .request(server)
//               .delete("/content/6189eb22807ff25128f3c991")
//               .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a("object");
//               });
//           });
//     })
// });
describe("Comment",()=>{
  // describe("getAllComment",()=>{
  //   it("should get all comment", () => {
  //         chai
  //           .request(server)
  //           .get("/comment")
  //           .end((err, res) => {
  //             res.should.have.status(200);
  //             res.body.should.be.a("object");
  //           });
  //       });
  // });
  
  // describe("get Comment by id",()=>{
  //   it("should get comment by id", () => {
  //         chai
  //           .request(server)
  //           .get("/comment/617bb0b6e8a7330c2480b46e")
  //           .end((err, res) => {
  //             res.should.have.status(200);
  //             res.body.should.be.a("object");
  //           });
  //       });
  // });

  // describe("add Comment ",()=>{
  //   it("should add Comment", () => {
  //     const task = {
  //       rating: 4,
  //       nama : "agus",
  //       comment: "makanannya enaak"
  //     }
  //         chai
  //           .request(server)
  //           .get("/comment/617bb0b6e8a7330c2480b46e")
  //           .set("content-type", "application/x-www-form-urlencoded")
  //           .send(task)
  //           .end((err, res) => {
  //             res.should.have.status(200);
  //             res.body.should.be.a("object");
  //           });
  //       });
  // });
})

// describe("Search",()=>{
//   describe("getAllSearch",()=>{
//     it("should get all search", () => {
//       const task = {
//                   input: "nasi goreng"
//       } 
//           chai
//             .request(server)
//             .post("/search/")
//             .set("content-type", "application/x-www-form-urlencoded")
//             .send(task)
//             .end((err, res) => {
//               res.should.have.status(200);
//               res.body.should.be.a("object");
//             });
//         });
//   });
  
//   describe("getSearchByTag",()=>{
//     it("should get all search by Tag", () => {
//       const task = {
//                   input: "healthy"
//       } 
//           chai
//             .request(server)
//             .post("/search/tag")
//             .set("content-type", "application/x-www-form-urlencoded")
//             .send(task)
//             .end((err, res) => {
//               res.should.have.status(200);
//               res.body.should.be.a("object");
//             });
//         });
//   });

//   describe("getSearchByBahan",()=>{
//     it("should get all search by Bahan", () => {
//       const task = {
//                   input: "nasi"
//       } 
//           chai
//             .request(server)
//             .post("/search/bahan")
//             .set("content-type", "application/x-www-form-urlencoded")
//             .send(task)
//             .end((err, res) => {
//               res.should.have.status(200);
//               res.body.should.be.a("object");
//             });
//         });
//   });
// })
