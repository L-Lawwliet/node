/*
Navicat MySQL Data Transfer

Source Server         : MySQL80
Source Server Version : 80021
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 80021
File Encoding         : 65001

Date: 2020-08-18 23:57:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for animation_t
-- ----------------------------
DROP TABLE IF EXISTS `animation_t`;
CREATE TABLE `animation_t` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `synopsis` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '简介',
  `createDate` date DEFAULT NULL,
  `isEnd` int DEFAULT '0',
  `updateTime` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `coverImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of animation_t
-- ----------------------------
INSERT INTO `animation_t` VALUES ('1', '火影忍者', '十多年前一只恐怖的尾兽“九尾妖狐”袭击了木叶隐村，当时的第四代火影拼尽全力，以自己的生命为代价将“九尾妖狐”封印在了刚出生的鸣人身上。木叶村终于恢复了平静，但村民们却把鸣人当成怪物看待，所有人都疏远他。无可奈何，鸣人用各种恶作剧试图吸引大家的注意力。在伊鲁卡老师的关心下，鸣人始终保持着乐观的精神。为了让更多的人认可自己，他下定决心要成为火影！鸣人怀着过人的自信与勇气开始了训练，但一切要比他想象的要困难的多！\n鸣人从小十分孤独，木叶村村民把他当成九尾的化身，当他是怪物看待。一晃十多年过去了， 鸣人考入了木叶村的忍者学校，结识了伙伴佐助和小樱。佐助是宇智波一族的末裔，当他还是小孩的时候他的哥哥——一个拥有强大实力的忍者将他们家族的人都杀死了，然后投靠了一直想集齐尾兽的晓组织，佐助从小就发誓要杀死哥哥，为家族报仇。鸣人他们在忍者学校得到了卡卡西老师的精心指点，在他的帮助下去迎接成长中的一次又一次挑战！\n不久之后，在卡卡西老师的带领下，鸣人与佐助、小樱一起踏上了修行之路。等待他们的将是无穷无尽的艰险挑战，而鸣人等人也在这生与死的较量中逐渐成长起来。', '2002-10-03', '1', '2020-07-15 00:40:00', 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1926452200.jpg');
INSERT INTO `animation_t` VALUES ('2', '进击的巨人', '利威尔', '2013-04-06', '0', '2020-07-15 00:43:00', 'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=447578762,4276217277&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=d908697dc34ef0c8a27f3520ae5e2cc5');
INSERT INTO `animation_t` VALUES ('3', '海贼王', '海贼王哥尔·D·罗杰在临死前曾留下了关于其毕生的财富“One Piece”的消息，由此引得群雄并起，众海盗们为了这笔传说中的巨额财富展开争夺，各种势力、政权不断交替，整个世界进入了动荡混乱的“大海贼时代”。', '1999-10-20', '0', '2020-07-18 20:14:00', 'https://bkimg.cdn.bcebos.com/pic/8ad4b31c8701a18bed32bbac902f07082938fe7c?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg');
