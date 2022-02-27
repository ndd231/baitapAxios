let renderTableDssv = () => {
  sinhVienService
    .layDanhSachSinhVien()
    .then((res) => {
      sinhVienController.renderTable(res.data);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
renderTableDssv();
document.getElementById("btn-add").addEventListener("click", function () {
  let svObject = sinhVienController.layThongTinTuForm();

  sinhVienService
    .themSinhVien(svObject)
    .then((res) => {
      renderTableDssv();
    })
    .catch((err) => {
      console.log(err);
    });
});
function xoaSV(id) {
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      renderTableDssv();
    })
    .catch((err) => {
      console.log(err);
    });
}
