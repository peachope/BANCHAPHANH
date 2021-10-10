$(document).ready(function () {
  $(".member-infor .container .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(function () {
    $(window).scroll(function () {
      let position = $(window).scrollTop();

      if (position > 400) {
        $(".totop").addClass("appear");
      } else {
        $(".totop").removeClass("appear");
      }
    });
  });
  const list = [
    {
      name: "Phạm Xuân Minh",
      major: "Bí thư Bí thư Đoàn Học viện Cơ sở",
      description: "Giảng viên Khoa Điện Tử 2",
      image: "images/pxm.png",
    },
    {
      name: "Trần Đình Đạt",
      major: "Phó Bí thư Đoàn Học viện Cơ sở, Trưởng Ban Học thuật",
      description:
        "Giảng viên Khoa Điện Tử 2, phụ trách các câu lạc bộ học thuật",
      image: "images/tdd.png",
    },
    {
      name: "Trần Duy Khang",
      major: "Phó Bí thư Đoàn Học viện Cơ sở, Trưởng Ban Phong trào",
      description: "Phụ trách Liên Chi Đoàn khoa Viễn thông ",
      image: "images/tdk.png",
    },
    {
      name: "Nguyễn Quốc Huy",
      major: "Uỷ viên Ban Thường vụ Đoàn Học viện Cơ sở",
      description:
        "Phụ trách Liên Chi Đoàn An toàn Thông tin, Câu lạc bộ Kết Nối ",
      image: "images/IMG_0351.png",
    },
    {
      name: "Trần Thị Bích Hợp",
      major:
        "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở, Trưởng Ban Truyền thông",
      description:
        "Phụ trách Liên Chi Đoàn Công nghệ Đa phương tiện, CLB BMA, CLB 37 Độ Sinh viên ",
      image: "images/bh.png",
    },
    {
      name: "Trần Duy Bảo",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở,Trưởng Ban Đoàn vụ ",
      description: "Phụ trách Liên Chi Đoàn khoa Quản trị Kinh doanh",
      image: "images/tdb.png",
    },
    {
      name: "Lê Quỳnh Phương Phi",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phụ trách Đội Văn nghê, Câu lac bộ Guitar",
      image: "images/lqpp.png",
    },
    {
      name: "Trần Ngọc Mai",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phụ trách Liên Chi Đoàn Kế toán ",
      image: "images/tnm.png",
    },
    {
      name: "Nguyễn Chí Thắng",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phụ trách Liên Chi Đoàn Khoa Điện tử",
      image: "images/thang.png",
    },
    {
      name: "Ngô Thu Hà",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phụ trách Câu lạc bộ C.MC ",
      image: "images/nth.png",
    },
    {
      name: "Nguyễn Thị Thuý Anh",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phụ trách Liên Chi Đoàn Marketing",
      image: "images/ntta.png",
    },
    {
      name: "Nguyễn Thành Chương",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phụ trách Câu lạc bộ Cờ ",
      image: "images/ntc.png",
    },

    {
      name: "Huỳnh Quốc Khánh",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description:
        "Phụ trách Liên Chi Đoàn Khoa Công nghệ Thông tin, CLB Bóng rổ, CLB Bóng chuyền",
      image: "images/hqk.png",
    },
    {
      name: "Trần Thị Kim Lang",
      major: "Uỷ viên Ban Chấp hành Đoàn Học viện Cơ sở",
      description: "Phụ trách Đội Sinh viên Tình nguyện ",
      image: "images/ttkl.png",
    },
  ];
  renderList(list, ".member-infor .container .owl-carousel");
});

function renderList(list, selector) {
  list.reverse().map((val, index) => {
    $(selector)
      .trigger("add.owl.carousel", [
        ` <div class="member ">
                       <div class="infor-member-team">
                              <div class="name-member">
                                  <h4><span class="dc">Đ/c </span>${val.name}</h4>
                                  <span>${val.major}</span>
                                  <p class="major-member">${val.description}
                              </div>
                              <div class="hobbies">
                                  <li><span>Trách nhiệm</span></li>
                                  <li><span>Nhiệt huyết</span></li>
                                  <li><span>Đoàn kết</span></li>
                                  <li><span>Khách quan</span></li>
                              </div>
                          </div>
                       <div class="image-member">
                          <img src="${val.image}" alt="">
                      </div>
                  </div>`,
        index,
      ])
      .trigger("refresh.owl.carousel");
  });
}
