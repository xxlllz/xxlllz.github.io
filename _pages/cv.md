---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **Ph.D. in Pattern Recognition**, Institute of Automation, Chinese Academy of Sciences, 2027 (expected)
  * Advisor: Prof. Bo Xu
  * Research: Multimodal Large Language Models & AI for Science
* **B.S. in Electronic Information Engineering**, University of Electronic Science and Technology of China, 2022
  * GPA: 3.85/4.0 (Top 5%)

Work Experience
======
* **July 2024 - April 2025**: Research Intern, QiYuan & ModelBest
  * Mentors: Qi Shi, Chi Chen, Yuxuan Li
  * **Multimodal Code Generation Research**: Proposed **ChartCoder**, the first chart-to-code generation model, achieving SOTA performance. Defined the novel task of code-based chart editing and constructed the high-quality human-annotated benchmark **ChartEdit**.
  * **Agent-based Automatic Experiment Reproduction**: Proposed **AutoReproduce** framework to improve reproduction success rate by retrieving and referencing papers. Built an agent-based reproduction benchmark.

* **April 2025 - July 2025**: Research Intern, Baidu Search Strategy Group
  * Mentor: Xiuyi Chen
  * **Multimodal AI4Science Research**: Designed **TinyChemVL** model for chemical multimodal tasks. Introduced adaptive visual token pruning and merging mechanism to enhance focus on key molecular structures. Built challenging image-based chemical reaction benchmarks.

* **August 2025 - February 2026**: Research Intern, Meituan LongCat Omni Foundation Model Group
  * Mentor: Zhixiong Zeng
  * **Foundation Model Multimodal Code Generation**: Built large-scale multimodal code dataset covering 10 scenarios. Proposed **VinciCoder** framework with visual feedback-based RL mechanism, significantly improving visual fidelity of generated code and achieving SOTA on multiple benchmarks.
  * **Foundation Model Web Agent Capability**: Explored diverse data synthesis paradigms, constructed high-quality data pipeline covering pre-training to post-training stages.

* **February 2026 - Present**: Research Intern, Moonshot AI RL Group

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======
* **Multimodal LLMs**: Familiar with LLaVA, InternVL, QwenVL architectures
* **Post-training Frameworks**: Experience with Swift, EasyR1, and RLHF pipelines
* **Programming**: Python, PyTorch, Deep Learning frameworks
* **Languages**:
  * CET-4: 582
  * CET-6: 488
  * IELTS: 6.5
  * Good English reading and writing skills

Academic Service
======
* Reviewer: KDD, ICLR, ACL, NeurIPS, CVPR

---

# 简历 (中文)

教育背景
======
* **博士 - 模式识别**, 中国科学院自动化研究所, 2027年6月 (预计)
  * 导师: 徐波研究员
  * 研究方向: 多模态大模型与AI for Science
* **学士 - 电子信息工程**, 电子科技大学, 2022年6月
  * GPA: 3.85/4.0 (排名前5%)

实习经历
======
* **2024年7月 - 2025年4月**: 启元 & 面壁 研究实习生
  * 指导人: 施琦, 陈驰, 李宇轩
  * **多模态代码生成研究**: 主导提出首个图表代码生成模型 **ChartCoder**，在相关任务上取得SOTA性能。定义了基于代码的图表编辑新任务，构建高质量人工标注评测集 **ChartEdit**。
  * **智能体自动实验复现**: 提出 **AutoReproduce** 框架，利用检索引用论文提升复现成功率。构建基于智能体的复现评测集。

* **2025年4月 - 2025年7月**: 百度 搜索策略组 研究实习生
  * 指导人: 陈修意
  * **多模态AI4Science研究**: 设计并实现 **TinyChemVL** 模型。通过视觉Token的自适应剪枝与合并机制，提升模型对关键分子结构的注意力捕捉能力。构建高难度图像化学反应评测集。

* **2025年8月 - 2026年2月**: 美团 LongCat Omni 基座组 研究实习生
  * 指导人: 曾志雄
  * **基座多模态代码生成能力建设**: 构建涵盖10类场景的大规模多模态代码数据集，提出 **VinciCoder** 框架，引入基于视觉反馈的强化学习机制，大幅提升生成代码的视觉保真度，达成SOTA。
  * **基座Web智能体能力建设**: 探索多样化数据合成范式，构建覆盖从预训练到后训练全阶段的高质量数据流。

* **2026年2月 - 至今**: 月之暗面 RL组 研究实习生

学术论文
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

技能
======
* **多模态大模型**: 熟悉LLaVA, InternVL, QwenVL等主流架构
* **后训练框架**: 了解Swift, EasyR1等大模型后训练框架
* **编程**: Python, PyTorch, 深度学习框架
* **语言能力**:
  * 英语四级: 582
  * 英语六级: 488
  * 雅思: 6.5
  * 具备良好的英文文献阅读和写作能力

学术服务
======
* 审稿人: KDD, ICLR, ACL, NeurIPS, CVPR
