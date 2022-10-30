import React from 'react';

const Admin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let userName = formData.get('name');
    console.log('userName', userName);
    auth.signIn();
  };
  return (
    <div>
      <h5>登录页</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="输入用户" />
        <button type={'submit'}>登录</button>
      </form>
    </div>
  );
};

export default Admin;
