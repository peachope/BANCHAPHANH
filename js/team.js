$(document).ready(function () {
  const media = [
    {
      name: "Bích Hợp",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Người Cute nhất",
      image: "images/tbh.png",
    },
    {
      name: "Duy Khang",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Người Ít tóc nhất",
      image: "images/tdk.png",
    },
    {
      name: "Quốc Huy",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Người Nói tiếng hành tinh",
      image: "images/IMG_0351.png",
    },
    {
      name: "Duy Tân",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Người Bùng kèo nhiều nhất",
      image: "images/tan.png",
    },
    // {
    //   name: "Võ Nguyên Hưng",
    //   description: "Cộng tác viên ",
    //   image: "images/thang.png",
    // },
    // {
    //   name: "Ngô Ngọc Thuý",
    //   description: "Cộng tác viên ",
    //   image: "images/thang.png",
    // },
    // {
    //   name: "Trương Thị Bảo Châu",
    //   description: "Cộng tác viên ",
    //   image: "images/thang.png",
    // },
    // {
    //   name: "Nguyễn Thị Cẩm Ly",
    //   description: "Cộng tác viên ",
    //   image: "images/thang.png",
    // },
    // {
    //   name: "Võ Huỳnh Anh Trúc",
    //   description: "Cộng tác viên ",
    //   image: "images/thang.png",
    // },
  ];

  const study = [
    {
      name: "Đình Đạt",
      major: "Phó bí thư Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Trưởng Ban",
      image: "images/tdd.png",
    },
    {
      name: "Thuý Anh",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phó Ban",
      image: "images/ntta.png",
    },
    {
      name: "Thành Chương",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Thành viên ",
      image: "images/ntc.png",
    },
  ];

  const policy = [
    {
      name: "Duy Bảo",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Trưởng Ban",
      image: "images/tdb.png",
    },
    {
      name: "Ngọc Mai",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phó Ban ",
      image: "images/tnm.png",
    },
    {
      name: "Kim Lang",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Thành viên",
      image: "images/ttkl.png",
    },
  ];

  const active = [
    {
      name: "Duy Khang",
      major: "Phó bí thư Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Trưởng Ban",
      image: "images/tdk.png",
    },
    {
      name: "Quốc Huy",
      major: "Uỷ viên Ban Thường vụ Đoàn Học viện Cơ sở",
      description: "Phó Ban",
      image: "images/IMG_0351.png",
    },
    {
      name: "Phương Phi",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Thành viên",
      image: "images/lqpp.png",
    },
    {
      name: "Quốc Khánh",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Thành viên",
      image: "images/hqk.png",
    },
  ];
  renderTeam(active, "#active");
  renderTeam(study, "#study");
  renderTeam(media, "#media");
  renderTeam(policy, "#policy");
});

function renderTeam(list, selector) {
  list.map((val, index) => {
    $(
      ` <div class="col-xs-6 col-md-3">
      <div class="card">
        <div class="sneaker">
          <div class="circle">
            <img src="${val.image}"/>
          </div>
        </div>
        <div class="info">
          <h3 class="title text-white">${val.name}</h1>
          <h5>${val.description}</h>
        </div>
      </div>
    </div>`
    ).appendTo(selector);
  });
}
