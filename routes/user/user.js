// 로그인 후 내 정보창 눌렀을 때 탭 라우터
const express = require("express");
const router = express.Router();
const controller = require("./controller_user");
// 요청 별 정의
// 내정보 기본화면
router.get("/", controller.get_user);
// 내 프로필 화면창
router.get("/profile", controller.get_profile);
// 내 프로필 변경
router.patch("/profile", controller.patch_profile);
// 내 연락처 및 회원정보창
router.get("/user_data", controller.get_user_data);
// 연락처 변경요청
router.patch("/user_data", controller.patch_user_data);
// 비밀번호변경창
router.get("/new_pw", controller.get_revise_pw);
// 비밀번호변경요청
router.patch("/new_pw", controller.patch_revise_pw);
// 회원탈퇴창
router.get("/drop_out", controller.get_drop_out);
// 회원탈퇴요청
router.delete("/drop_out", controller.delete_drop_out);
// 모듈화
module.exports = router;
