<template>
    <div class="home">
      <h1>欢迎来到学生管理系统</h1>
      <router-link to="/students">
        <button>进入学生列表</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh; /* 让内容垂直居中，占据整个视口高度 */
  }
  
  h1 {
    text-align: center; /* 文字水平居中 */
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  