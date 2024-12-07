document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') return;
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({behavior: 'smooth'});
    });
});

// document.getElementById('contact').addEventListener('click', () => {
//     window.location.href = 'mailto:nguyenvana@gmail.com';
// });
document.getElementById('contact').addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn điều hướng mặc định
    const email = 'nguyenvana@gmail.com';
    const subject = encodeURIComponent('Hello!');
    const body = encodeURIComponent('I would like to contact you.');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank'); // Mở Gmail trong tab mới
});


// document.getElementById('add-product').addEventListener('click', () => {
//     const name = document.getElementById('product-name').value;
//     const image = document.getElementById('product-image').value;
//     const productList = document.getElementById('product-list');
//
//     if (name && image) {
//         const productId = productList.children.length + 1;
//         const productDiv = document.createElement('div');
//         productDiv.className = 'product';
//
//         productDiv.innerHTML = `
//             <img src="${image}" alt="${name}">
//             <p>ID: ${productId}</p>
//             <h3>${name}</h3>
//             <button>Edit</button>
//             <button>Delete</button>
//         `;
//
//         productList.appendChild(productDiv);
//         document.getElementById('product-name').value = '';
//         document.getElementById('product-image').value = '';
//     } else {
//         alert('Please fill in both fields.');
//     }
// });
let nextProductId = 1; // ID sản phẩm tiếp theo (vì đã có 2 sản phẩm mẫu)

document.getElementById('add-product').addEventListener('click', () => {
    const name = document.getElementById('product-name').value;
    const image = document.getElementById('product-image').value;
    const productList = document.getElementById('product-list');

    // Kiểm tra nếu người dùng đã nhập tên và hình ảnh
    if (name && image) {
        const productId = nextProductId++;  // Sử dụng và tăng ID tiếp theo

        // Tạo phần tử sản phẩm mới
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Nội dung HTML của sản phẩm mới
        productDiv.innerHTML = `
            <p>ID: ${productId}</p>
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <div style="display: flex; justify-content: space-evenly; align-items: center">
            <button class="edit" style="background-color: #da2626; border-radius: 8px; width: 40%; height: 30px;">Edit</button>
            <button class="delete" style="background-color: #beb22b; border-radius: 8px; width: 40%; height: 30px;">Delete</button>
            </div>
        `;

        // Thêm sản phẩm vào danh sách
        productList.appendChild(productDiv);

        // Xóa nội dung ô nhập sau khi thêm
        document.getElementById('product-name').value = '';
        document.getElementById('product-image').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});


// Xử lý sự kiện cho các nút Edit và Delete
document.getElementById('product-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // Xóa sản phẩm
        const productDiv = e.target.closest('.product');
        productDiv.remove();
    } else if (e.target.classList.contains('edit')) {
        // Chỉnh sửa sản phẩm
        const productDiv = e.target.closest('.product');
        const productId = productDiv.dataset.id;
        const productName = productDiv.querySelector('h3').textContent;
        const productImage = productDiv.querySelector('img').src;

        // Hiển thị modal chỉnh sửa
        document.getElementById('edit-product-name').value = productName;
        document.getElementById('edit-product-image').value = productImage;

        const modal = document.getElementById('edit-modal');
        modal.style.display = 'block';

        // Lưu thông tin đã chỉnh sửa
        document.getElementById('save-edit').onclick = () => {
            const newName = document.getElementById('edit-product-name').value;
            const newImage = document.getElementById('edit-product-image').value;

            if (newName && newImage) {
                productDiv.querySelector('h3').textContent = newName;
                productDiv.querySelector('img').src = newImage;
                modal.style.display = 'none'; // Đóng modal
            } else {
                alert('Please fill in both fields.');
            }
        };

        // Hủy chỉnh sửa
        document.getElementById('cancel-edit').onclick = () => {
            modal.style.display = 'none';
        };
    }
});