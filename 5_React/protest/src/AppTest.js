import "./asset/test.scss";

const AppTest = () => {
  return (
    <>
      <header className="header">
        <div className="header-main">
          <div className="logo">Nest Library</div>
          <div className="channel-menu">
            <ul>구독 채널</ul>
            <ul>모든 채널</ul>

            <form>
              <input className="search" type="text" placeholder=" Search" />
            </form>
          </div>
          <div className="user-Tap">
            <span className="info">로그인</span>
            <span className="info">회원가입</span>
          </div>
        </div>
      </header>
    </>
  );
};
export default AppTest;
