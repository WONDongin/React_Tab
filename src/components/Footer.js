import { styled } from "styled-components";
import { useState } from "react";
import Ci from "./Ci";

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const TabBox = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;

`;

const TabButton = styled.button`
 width: 33.333%;
  border: none;
  padding: 10px 20px;
  background-color: ${({ "data-active": dataActive }) =>
          dataActive === "true" ? "#000" : "transparent"};
  color: ${({ "data-active": dataActive }) =>
          dataActive === "true" ? "#fff" : "#ccc"};
  font-weight: ${({"data-active" : dataActive}) => 
          dataActive === "true" ? "700" : "500"};
  cursor: pointer;
  font-size: 16px;
`;

const TabContent = styled.div`
  padding: 50px 1rem;
`;

const Footer = () => {
    const TabData = [
        { id: 1, button: "비전", content: "비전" },
        { id: 2, button: "경영이념", content: "경영이념" },
        { id: 3, button: "CI", content: <Ci /> },
    ];

    const [activeTab, setActiveTab] = useState(TabData[0].id);

    return (
        <FooterBox>
            <TabBox>
                {TabData.map((tab) => (
                    <TabButton
                        key={tab.id}
                        data-active={activeTab === tab.id ? "true" : "false"}
                        onClick={() => setActiveTab(tab.id)}>
                        {tab.button}
                    </TabButton>
                ))}
            </TabBox>
            <TabContent>
                {TabData.find((a) => a.id === activeTab)?.content}
            </TabContent>
        </FooterBox>
    );
};

export default Footer;