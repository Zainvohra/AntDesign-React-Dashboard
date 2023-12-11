import { Space } from "antd"
import './App.css';
import { AppHeader } from "./Components/AppHeader"
import { AppFooter } from "./Components/AppFooter"
import { SideMenu } from "./Components/SideMenu"
import { PageContent } from "./Components/PageContent"
import { AppRoutes } from "./Components/AppRoutes"
function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuandPageContent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />

    </div>
  );
}

export default App;
