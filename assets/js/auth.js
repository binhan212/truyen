var TienAuth = (function () {
  var KEY_USERS = "tien_users";
  var KEY_SESSION = "tien_session";

  function seed() {
    var users = getUsers();
    if (users.length === 0) {
      users.push({
        id: 1,
        username: "admin",
        email: "admin@tien.dao",
        password: "123456",
        avatar: "AD",
        createdAt: Date.now()
      });
      saveUsers(users);
    }
  }

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(KEY_USERS)) || []; } catch (e) { return []; }
  }

  function saveUsers(users) {
    localStorage.setItem(KEY_USERS, JSON.stringify(users));
  }

  function login(email, password) {
    var users = getUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        localStorage.setItem(KEY_SESSION, JSON.stringify({ id: users[i].id, username: users[i].username, email: users[i].email, avatar: users[i].avatar }));
        return { success: true, user: users[i] };
      }
    }
    return { success: false, error: "Email hoặc mật khẩu không đúng" };
  }

  function register(username, email, password) {
    var users = getUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) return { success: false, error: "Email đã được sử dụng" };
      if (users[i].username.toLowerCase() === username.toLowerCase()) return { success: false, error: "Tên người dùng đã tồn tại" };
    }
    var initials = username.replace(/[^a-zA-ZÀ-ỹ]/g, "").substring(0, 2).toUpperCase() || "NA";
    var user = { id: users.length + 1, username: username, email: email, password: password, avatar: initials, createdAt: Date.now() };
    users.push(user);
    saveUsers(users);
    localStorage.setItem(KEY_SESSION, JSON.stringify({ id: user.id, username: user.username, email: user.email, avatar: user.avatar }));
    return { success: true, user: user };
  }

  function logout() {
    localStorage.removeItem(KEY_SESSION);
  }

  function getUser() {
    try { return JSON.parse(localStorage.getItem(KEY_SESSION)) || null; } catch (e) { return null; }
  }

  function isLoggedIn() { return getUser() !== null; }

  seed();

  return { login: login, register: register, logout: logout, getUser: getUser, isLoggedIn: isLoggedIn };
})();
