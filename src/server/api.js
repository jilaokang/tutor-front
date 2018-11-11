import util from '../utils/utls'

class Store {

    // 登录-检测用户是否登录
    checkLogin = (user, password) =>
        util.hasEnryption('post', 'signin', {
            user,
            password
        });

    // 登录-用户注册
    signup = (user, password, tel) =>
        util.hasEnryption('post', 'signup', {
            user,
            password,
            tel
        });

    // 登录-找回密码
    findPassword = (tel) =>
        util.hasEnryption('post', 'findPasswd', {
            tel
        });

    // 求职-家教者求职
    wantedData = () => util.hasEnryption('get', 'wanted');

    wanted = (subject, salary, tel, introduce) =>
        util.hasEnryption('post', 'wanted', {
            subject,
            salary,
            tel,
            introduce
        });

    // 招聘-家长招聘
    recruitData = () => util.hasEnryption('get', 'recruit');

    recruit = (subject, salary, tel, introduce, grade) =>
        util.hasEnryption('post', 'recruit', {
            subject,
            salary,
            tel,
            introduce,
            grade
        });
}

export default new Store()