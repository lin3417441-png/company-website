import type { TimelineEvent, TeamMember, Testimonial, Course } from '@/types'
import { FEATURE_PROJECTS } from './constants'

export { FEATURE_PROJECTS }

export const timeline: TimelineEvent[] = [
  { year: '2016', title: '能仁堂创立', description: '丙申年，能仁堂在美丽的鹭岛厦门应运而生，秉持"能仁大愿，仁心仁术"的初心宗旨。' },
  { year: '2018', title: '门诊扩展', description: '先后开设多家门诊部，汇聚超百位资深医师，由多位三甲医院退休主任级专家领衔坐诊。' },
  { year: '2020', title: '中医院成立', description: '能仁堂中医院正式运营，成为二级中医院，提供更全面的中医诊疗服务。' },
  { year: '2022', title: '研学中心', description: '两个中医药研学中心投入运营，搭建医道文化传播平台，培育中医新生力量。' },
  { year: '2023', title: '健康科技', description: '成立健康科技公司，拥有多项自主专利，推动中医药健康产品的研发与创新。' },
  { year: '2024', title: '集团化发展', description: '正式组建能仁堂集团，构建"医疗诊疗、康复疗养、文化研学、健康科技"全产业链生态。' },
]

export const teamMembers: TeamMember[] = [
  { id: 1, name: '余氏传人', role: '骨伤科首席专家', specialties: '余氏骨伤、疼痛管理', bio: '余氏骨伤流派传承人，精通传统骨伤手法，临床经验丰富。' },
  { id: 2, name: '张明德', role: '中医内科主任', specialties: '体质调理、结节调理', bio: '三甲医院退休主任医师，擅长疑难杂症诊治和体质调理。' },
  { id: 3, name: '李秀华', role: '中医妇科主任', specialties: '女性康养、睡眠调理', bio: '中医妇科领域专家，专注女性全周期健康管理。' },
  { id: 4, name: '王建国', role: '针灸推拿科主任', specialties: '针灸、推拿、疼痛管理', bio: '针灸推拿学科带头人，精通传统针法与现代疼痛治疗技术。' },
  { id: 5, name: '陈志强', role: '中药房主任', specialties: '中药鉴定、膏方制作', bio: '执业中药师，多年中药鉴定经验，确保每一味药材品质。' },
  { id: 6, name: '赵雅婷', role: '食养小屋负责人', specialties: '中医食疗、营养学', bio: '中西医结合营养师，将传统食养理念与现代营养科学相融合。' },
  { id: 7, name: '刘文博', role: '研学中心主任', specialties: '中医科普、文化教育', bio: '中医药文化传播者，致力于搭建医道文化传播平台。' },
  { id: 8, name: '林佳慧', role: '小儿推拿专家', specialties: '小儿推拿、儿童保健', bio: '专注小儿推拿领域，以手代药，为儿童健康保驾护航。' },
]

export const testimonials: Testimonial[] = [
  { id: 1, name: '王女士', role: '体质调理患者', content: '在能仁堂调理了三个月，体质明显改善，专家团队非常专业，服务贴心。' },
  { id: 2, name: '李先生', role: '骨伤患者', content: '余氏骨伤手法真的名不虚传，多年的腰椎问题得到了很大缓解。' },
  { id: 3, name: '陈女士', role: '女性康养会员', content: '食养小屋的养生方案很实用，学会了根据节气调整饮食，身体状态好了很多。' },
  { id: 4, name: '孙先生', role: '研学课程学员', content: '带孩子参加了中医研学活动，学到了很多中医药知识，孩子特别感兴趣。' },
  { id: 5, name: '赵先生', role: '睡眠调理患者', content: '长期失眠困扰了我很多年，在能仁堂调理后终于能睡个好觉了。' },
  { id: 6, name: '周女士', role: '小儿推拿家长', content: '孩子感冒发烧不做推拿就好了，不用吃药打针，真的很神奇。' },
]

export const courses: Course[] = [
  { id: 1, name: '中医基础体验课', description: '了解中医望闻问切四诊法，体验把脉和舌诊，感受中医魅力。' },
  { id: 2, name: '二十四节气养生讲座', description: '跟随节气变化，学习应季养生方法，掌握食疗和穴位保健技巧。' },
  { id: 3, name: '中药香囊制作工坊', description: '亲手制作中药香囊，了解常见中药材功效，体验传统中医药文化。' },
  { id: 4, name: '小儿推拿家长课堂', description: '学习常用小儿推拿手法，帮助家长在家为孩子进行日常保健。' },
]
