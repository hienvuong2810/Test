1. Socket.io là gì
    Socket.IO là một thư viện cho phép kết nối với độ trễ thấp, hai chiều và hoạt động trên hướng sự kiện giữa client và server và nó được phát triển để sử dụng các kết nối để tạo điều kiện giao tiếp thời gian thực, trả về giá trị thực ở tại thời điểm đó.
2. Cách Socket.io hoạt động
    Đầu tiên socket.io sẽ thiết lập một kết nối long-polling đến server, sau đó cố gắng nâng cấp lên các kết nối khác tốt hơn giống như WebSocket hoặc Webtransport. Tùy theo loại nào trình duyệt đang hỗ trợ, socket.io sẽ chọn loại tốt nhất
3. Một số cách khác kết nối khác để lấy thông tin real-time
    - Long-polling: Cách này thì ở client sẽ gửi 1 request đến server, mỗi khi nhận yêu cầu thì máy chủ sẽ gửi phản hồi lại nếu có cập nhật mới, Tại đây, clients sẽ liên tục & định kỳ yêu cầu cập nhật từ máy chủ, điều này sẽ làm tắc nghẽn lưu lượng mạng.
    - Short-polling, clients định kỳ gửi yêu cầu đến máy chủ để hỏi xem có gì mới không. Máy chủ không đợi, nhưng gửi lại nếu có gì mới hoặc chỉ có tin nhắn trống. Ở đây, mạng thậm chí còn tắc nghẽn hơn với các yêu cầu liên tục này, ngay cả khi không có gì mới. (Giống cách mình đang check project có được delete hay không)
    - WebSockets, khi websocket kết nối thì sẽ luôn có một kết nối TCP giữa clients và server. Dung lượng phần header của giao thức HTTP là 100 byte, trong khi phần header của socket chỉ là 2 byte. Vì vậy, WebSockets có thể giao tiếp với tài nguyên ít hơn nhiều. Với nhiều số lượng yêu cầu được gửi đến thì nó cũng sẻ làm giảm thời gian phản hồi từ server tới clients.
    3.1 Khác biệt giữa Websocket & Socket.io
        - Mặc dù Socket.io thực sự sử dụng WebSocket như một cách để giao tiếp trong một vài trường hợp, tuy nhiên socket.io bổ sung thêm một số thông tin như namespace, id etc... nên không thể dùng socket.io kết nối đến server websocket hoặc ngược lại dùng websocket kết nối đến server socket.io
        - Socket.io là 1 thư viện:  hỗ trợ sẵn nhiều công cụ như: logging, room, namespace, etc.... (nhanh, dễ sử dụng)
        - Websocket là 1 protocol: mọi thứ cần phải tự implement (do mọi thứ cần implement nên có thể implement theo kiến trúc mình mong muốn....)
        https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets

4. Sử dụng
    4.1. Các ngôn ngữ hỗ trợ
        Về phía server thì socket.io có hỗ trợ các ngôn ngữ: Javascript, Java, Python, Golang, Rust
        Về phía client thì socket.io có hỗ trợ các ngôn ngữ: JavaScript, Java, C++, Swift, Dart, Python, .Net, Rust, Kotlin
    4.2 Tích hợp express với socket.io
    https://socket.io/get-started/chat
    4.3 Một số sự kiện cơ bản trong socket.io
    io.on("connection", (socket) => {
        console.log("có 1 user đã kết nối")

        // gủi message tới user
        socket.emit(/* ... */);

        // gửi message tới tất cả user trong namespace hiện tại, ngoại trừ người gửi
        socket.broadcast.emit(/* ... */);

        //  gửi message với 1 user khác
        io.to(socketId).emit(/* ... */);

        // gủi message tới tất cả users
        io.emit(/* ... */);
    });

https://socket.io/docs/v3/emit-cheatsheet/






















