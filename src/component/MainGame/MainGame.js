import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainGame.scss';
import Default from 'img/Default.png';
import sign from 'img/sign.png';

const cx = classNames.bind(styles);

const MainGame = ({date, img,health, ab, money}) => {
    return (
        <div className={cx("MainGame_Wrapper")}>
            <div className={cx("Top_Wrapper")}>
                <div className={cx("Time_Wrapper")}>
                    <div className={cx("Time")}>
                        <div className={cx("Time_Img")}>
                            <img src={sign}/>
                        </div>
                        <div className={cx("Time_Text")}>
                            D-{date}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("Bottom_Wrapper")}>
                <div className={cx("Left_Wrapper")}>
                    <div className={cx("Profile_Wrapper")}>
                        <div className={cx("profile")}><img src={img}/></div>
                    </div>
                </div>
                <div className={cx("Right_Wrapper")}>
                    <div className={cx("RTop_Wrapper")}>
                        <div className={cx("Button")}>
                            <div className={cx("BTop_Wrapper")}>
                                <button id="Button1">외주하기</button>
                                <button id="Button2">공부하기</button>
                                <button id="Button3">노가다</button>
                            </div>
                            <div className={cx("BBottom_Wrapper")}>
                                <button id="Button4">휴식</button>
                                <button id="Button5">독서</button>
                                <button id="Button6">게임</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("RBottom_Wrapper")}>
                        <div className={cx("Info_Wrapper")}>
                            <div className={cx("Info")}>체력 : {health}</div>
                            <div className={cx("Info")}>능력 : {ab}</div>
                            <div className={cx("Info")}>돈 : {money}원</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainGame;