let sinhVienController = {
  renderTable: function (arr) {
    let tBodyEl = document.getElementById("tbodySinhVien");

    let contentHTML = "";

    arr.map((item) => {
      let trContent = `
      <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>"dtb"</td>
      <td>
      <button class="btn btn-success ">Sửa</button>
      <button class="btn btn-danger onclick="xoaSV(${item.id})">Xóa</button>
      </td>
      </tr>
      `;

      contentHTML += trContent;
    });

    tBodyEl.innerHTML = contentHTML;
  },
  layThongTinTuForm: function () {
    let tenSV = document.getElementById("txtTenSV").value;
    let maSV = document.getElementById("txtMaSV").value;
    let emailSV = document.getElementById("txtEmail").value;
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemLy = document.getElementById("txtDiemLy").value;
    let diemHoa = document.getElementById("txtDiemHoa").value;
    return {
      name: tenSV,
      email: emailSV,
      toan: diemToan,
      ly: diemLy,
      hoa: diemHoa,
      id: maSV,
    };
  },
};
