// 로그인창 라우터
const express = require("express");
const router = express.Router();
const controller = require("../controller/controller_mypost");

// 요청 별 정의
// 내가 쓴 글 데이터 목록 가져오기
router.get("/my-post", controller.myPost);
// 내가 쓴 댓글 데이터 목록 가져오기
router.get("/my-comments", controller.myComment);
// 도서관 후기 데이터 목록 가져오기
router.get("/lib-review", controller.myReview);

// 목록 중 선택 글 삭제
router.delete("/my-post", controller.deletePost);
// 목록 중 선택 댓글 삭제
router.delete("/my-comments", controller.deleteComment);
// 목록 중 도서관 후기 삭제
router.delete("/lib-review", controller.deleteReview);

// 모듈화
module.exports = router;
