let questions = [
    { q: "Q1. Consider the following statements regarding the Preamble:\n- The Preamble is a part of the Constitution and may be amended under Article 368.\n- An amendment to the Preamble is valid only if it does not damage or destroy the basic structure.\n- The Preamble independently confers legislative power upon Parliament.\n- The Preamble may be used as an aid to interpretation where constitutional language is ambiguous.\nWhich of the statements are correct?", opts: ["1, 2, 3 and 4", "1 and 3 only", "2 and 3 only", "1, 2 and 4 only"], ans: 3, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q2. A Constitutional Amendment Act seeks to exclude all judicial review of constitutional amendments and declares Parliament's amending power unlimited. Which is the most appropriate constitutional conclusion?", opts: ["It is valid because Article 368 contains no express substantive limitation.", "It is valid if passed by a special majority in both Houses.", "It is invalid to the extent that it damages or destroys the basic structure.", "It is valid if approved by the President."], ans: 2, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q3. Assertion (A): The doctrine of basic structure is not expressly mentioned in Article 368.\nReason (R): The Supreme Court evolved the doctrine as a limitation on Parliament's constituent power in Kesavananda Bharati v. State of Kerala.", opts: ["A is false, but R is true.", "Both A and R are true, but R does not explain A.", "A is true, but R is false.", "Both A and R are true, and R correctly explains A."], ans: 3, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q4. Match the following cases with the constitutional principles principally associated with them:\n1. Shankari Prasad - a. Basic structure\n2. Golak Nath - b. Prospective overruling and restriction on amendment of Fundamental Rights\n3. Kesavananda Bharati - c. Amendment of Fundamental Rights treated as law under Article 13\n4. Minerva Mills - d. Limited amending power and harmony between Parts III and IV\nSelect the correct code:", opts: ["1-b, 2-c, 3-d, 4-a", "1-c, 2-a, 3-b, 4-d", "1-c, 2-b, 3-a, 4-d", "1-d, 2-b, 3-c, 4-a"], ans: 2, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q5. Consider the following statements about the doctrine of basic structure:\n- Every provision of the Constitution is necessarily part of the basic structure.\n- The basic structure doctrine applies to constitutional amendments, not merely ordinary legislation.\n- The list of basic features is exhaustive and closed.\n- The validity of an amendment is assessed by examining its effect on the Constitution's basic features.\nWhich are correct?", opts: ["1 and 3 only", "1, 2 and 4 only", "2 and 4 only", "2, 3 and 4 only"], ans: 2, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q6. Parliament inserts a statute into the Ninth Schedule after 24 April 1973. The statute substantially damages judicial review and equality, both of which are alleged to be basic features. Which principle applies?", opts: ["The Ninth Schedule gives absolute immunity to every statute placed in it.", "Every post-1973 Ninth Schedule law is automatically void.", "The law may be tested under the basic structure doctrine if its impact damages or destroys basic features.", "Only the President may examine its constitutional validity."], ans: 2, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q7. Which of the following statements correctly reflects the doctrine of prospective overruling as applied in Indian constitutional jurisprudence?", opts: ["It makes every earlier judgment void from its inception.", "It prevents courts from overruling earlier decisions.", "It applies only to criminal statutes.", "A court may declare a legal position for the future while limiting the retrospective effect of its ruling."], ans: 3, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q8. Consider the following pairs:\n1. Berubari Union - Preamble initially not treated as part of the Constitution\n2. Kesavananda Bharati - Preamble recognised as part of the Constitution\n3. Minerva Mills - Limited amending power\n4. I.R. Coelho - Ninth Schedule laws subject to basic-structure scrutiny\nHow many pairs are correctly matched?", opts: ["Only one", "Only two", "Only three", "All four"], ans: 3, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q9. A constitutional provision is capable of two interpretations. One interpretation preserves constitutional harmony while the other creates a direct conflict between Fundamental Rights and Directive Principles. Which approach is most consistent with Minerva Mills?", opts: ["Directive Principles must always prevail.", "Fundamental Rights must always prevail without considering context.", "The court must refuse to interpret the provision.", "The provision should be interpreted harmoniously, preserving the balance between Parts III and IV."], ans: 3, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q10. Arrange the following cases chronologically:\n1. A.K. Gopalan v. State of Madras\n2. Golak Nath v. State of Punjab\n3. Kesavananda Bharati v. State of Kerala\n4. Maneka Gandhi v. Union of India\n5. Minerva Mills v. Union of India", opts: ["1–2–4–3–5", "2–1–3–5–4", "1–3–2–4–5", "1–2–3–4–5"], ans: 3, cat: "Constitutional Philosophy & Basic Structure" },
    { q: "Q11. A State law creates two classes of similarly situated persons and grants a benefit to one class. The State establishes an intelligible differentia but cannot demonstrate any rational connection between that classification and the object of the law. Which is the most appropriate conclusion?", opts: ["The classification is valid because intelligible differentia alone is sufficient.", "Article 14 does not apply to economic legislation.", "The classification is vulnerable under Article 14 because both requirements of reasonable classification must be satisfied.", "The classification is valid if approved by the Governor."], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q12. Consider the following statements concerning Article 14:\n- It is available to persons and is not confined to citizens.\n- It prohibits class legislation but permits reasonable classification.\n- Manifest arbitrariness may be a ground for invalidating legislation.\n- It prohibits the State from making any distinction between individuals.\nWhich are correct?", opts: ["1 and 4 only", "2 and 4 only", "1, 2 and 3 only", "1, 2, 3 and 4"], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q13. A law imposes a restriction on freedom of speech. The restriction is said to protect public order, but the alleged expression has no proximate connection with any threat to public order. Which case is especially relevant to the requirement of proximity between speech and public disorder?", opts: ["S.P. Gupta v. Union of India", "Shankari Prasad v. Union of India", "Kihoto Hollohan v. Zachillhu", "S. Rangarajan v. P. Jagjivan Ram"], ans: 3, cat: "Fundamental Rights & Writs" },
    { q: "Q14. Consider the following statements regarding Article 19:\n- Article 19(1)(a) protects freedom of speech and expression.\n- Article 19(2) permits reasonable restrictions on specified grounds.\n- The grounds in Article 19(2) can be expanded by ordinary legislation.\n- The freedom of the press is judicially recognised as part of Article 19(1)(a).\nWhich are correct?", opts: ["1 and 2 only", "2, 3 and 4 only", "1, 2 and 4 only", "1, 2, 3 and 4"], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q15. In Shreya Singhal v. Union of India, the Supreme Court distinguished between discussion, advocacy and incitement. Which statement best reflects the decision?", opts: ["All forms of offensive online speech are constitutionally protected without limitation.", "Article 19(1)(a) does not extend to online communication.", "Mere discussion or advocacy, however unpopular, cannot be equated automatically with incitement.", "The State may criminalise vague speech offences without constitutional scrutiny."], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q16. A person is detained under a preventive detention law. The grounds of detention are not communicated within the constitutionally permissible period and no sufficient explanation is offered. Which constitutional provision is most directly implicated?", opts: ["Article 20(1)", "Article 21A", "Article 22(5)", "Article 29(1)"], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q17. Consider the following statements regarding Article 20:\n- Article 20(1) prohibits conviction for an act that was not an offence when committed.\n- Article 20(1) prohibits every retrospective change in criminal procedure.\n- Article 20(2) protects against prosecution and punishment more than once for the same offence.\n- Article 20(3) protects an accused person against compelled testimonial self-incrimination.\nWhich are correct?", opts: ["1 and 3 only", "2 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q18. An investigating agency obtains a person's fingerprints, handwriting sample and blood sample under lawful authority. The person argues that every such collection violates Article 20(3). Which is the most appropriate legal position?", opts: ["Every physical sample is necessarily testimonial compulsion.", "Article 20(3) protects against all forms of compelled physical evidence.", "Article 20(3) applies only after conviction.", "The protection is directed against compelled testimonial self-incrimination; the nature of the evidence and legal authority must be examined."], ans: 3, cat: "Fundamental Rights & Writs" },
    { q: "Q19. In Selvi v. State of Karnataka, the Supreme Court held that involuntary administration of narco-analysis, polygraph examination and brain-mapping techniques violates which constitutional protections?", opts: ["Articles 14 and 300A only", "Articles 19(1)(g) and 25 only", "Articles 29 and 30 only", "Articles 20(3) and 21"], ans: 3, cat: "Fundamental Rights & Writs" },
    { q: "Q20. Which of the following statements about Article 21 is most accurate after Maneka Gandhi v. Union of India?", opts: ["Any procedure enacted by the legislature is necessarily valid.", "Article 21 applies only to citizens.", "Article 21 is excluded whenever Article 19 is involved.", "A law affecting personal liberty must prescribe a procedure that is fair, just and reasonable, and must satisfy relevant constitutional requirements."], ans: 3, cat: "Fundamental Rights & Writs" },
    { q: "Q21. Match the following:\n1. Hussainara Khatoon - a. Right to livelihood\n2. Olga Tellis - b. Speedy trial\n3. D.K. Basu - c. Custodial arrest safeguards\n4. K.S. Puttaswamy - d. Right to privacy", opts: ["1-d, 2-c, 3-b, 4-a", "1-a, 2-b, 3-d, 4-c", "1-c, 2-d, 3-a, 4-b", "1-b, 2-a, 3-c, 4-d"], ans: 3, cat: "Fundamental Rights & Writs" },
    { q: "Q22. A State acquires personal data from citizens for a legitimate public purpose. The collection is excessive, indiscriminate and unsupported by adequate safeguards. Which constitutional approach is most relevant?", opts: ["Privacy is an absolute right and cannot be restricted under any circumstances.", "Privacy is protected under Article 21 and restrictions must satisfy applicable constitutional standards, including legality, legitimate aim and proportionality.", "Privacy applies only against private companies.", "Collection of personal data is outside constitutional scrutiny."], ans: 1, cat: "Fundamental Rights & Writs" },
    { q: "Q23. Which of the following best describes the ruling in Justice K.S. Puttaswamy v. Union of India (2017)?", opts: ["Privacy is a Fundamental Right derived from constitutional guarantees, including Articles 14, 19 and 21.", "Privacy is merely a statutory privilege.", "Privacy is available only to citizens.", "Privacy cannot be balanced against legitimate State interests."], ans: 0, cat: "Fundamental Rights & Writs" },
    { q: "Q24. A person is illegally confined by a private individual. A friend approaches the High Court seeking release of the detainee. Which is correct?", opts: ["Habeas Corpus cannot be issued against private persons.", "The petition must be filed only by the detainee personally.", "Habeas Corpus may be issued against a private person, and a person acting on behalf of the detainee may approach the court.", "Habeas Corpus is available only after a criminal trial."], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q25. A tribunal has passed an order without jurisdiction. The affected party approaches the High Court after the tribunal has delivered its decision. Which writ is ordinarily appropriate to quash the order?", opts: ["Mandamus", "Quo Warranto", "Certiorari", "Habeas Corpus"], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q26. A lower court is proceeding with a matter entirely outside its jurisdiction. The proceedings have not yet concluded. Which writ is ordinarily appropriate to prevent continuation?", opts: ["Prohibition", "Certiorari", "Quo Warranto", "Mandamus"], ans: 0, cat: "Fundamental Rights & Writs" },
    { q: "Q27. Consider the following statements concerning Articles 32 and 226:\n- Article 32 is itself a Fundamental Right.\n- Article 226 may be invoked for enforcement of Fundamental Rights and for other purposes.\n- The territorial jurisdiction of a High Court under Article 226 may extend where the cause of action arises wholly or in part within its territory.\n- Article 32 and Article 226 have identical scope.\nWhich are correct?", opts: ["1 and 2 only", "2, 3 and 4 only", "1, 2 and 3 only", "1, 2, 3 and 4"], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q28. In L. Chandra Kumar v. Union of India, which proposition was upheld?", opts: ["Tribunals may completely exclude High Court jurisdiction.", "All tribunals are unconstitutional.", "Judicial review under Articles 226/227 and 32 is part of the basic structure, and tribunal decisions remain subject to constitutional court scrutiny.", "Article 136 is the only remedy against tribunal decisions."], ans: 2, cat: "Fundamental Rights & Writs" },
    { q: "Q29. A person challenges the appointment of a public office-holder on the ground that the appointee lacks statutory qualifications. Which writ is most appropriate?", opts: ["Quo Warranto", "Mandamus", "Habeas Corpus", "Prohibition"], ans: 0, cat: "Fundamental Rights & Writs" },
    { q: "Q30. Which statement concerning Article 13 is correct?", opts: ["It invalidates a law in its entirety even where only a severable portion is inconsistent with Fundamental Rights.", "It applies only to laws made after the commencement of the Constitution.", "It excludes judicial review of delegated legislation.", "A law inconsistent with Fundamental Rights is void to the extent of inconsistency."], ans: 3, cat: "Fundamental Rights & Writs" },
    { q: "Q31. Consider the following statements concerning Article 15:\n- Article 15(1) prohibits discrimination by the State on specified grounds.\n- Article 15(2) extends to certain forms of discrimination in access to shops, public restaurants, hotels and places of public entertainment.\n- Article 15(3) enables special provisions for women and children.\n- Article 15(5) excludes minority educational institutions referred to in Article 30(1).\nWhich are correct?", opts: ["1, 2 and 3 only", "1, 3 and 4 only", "1, 2 and 4 only", "1, 2, 3 and 4"], ans: 3, cat: "Equality, Reservation & DPSP" },
    { q: "Q32. A State provides reservation for a backward class in public employment but fails to establish the relevant constitutional conditions for reservation in promotion. Which statement is correct?", opts: ["Article 16(4) automatically includes reservation in promotion.", "Reservation in promotion is prohibited absolutely.", "Article 16(4A) is a separate enabling provision concerning reservation in promotion for Scheduled Castes and Scheduled Tribes, subject to constitutional requirements.", "Reservation in promotion is governed exclusively by Article 15(3)."], ans: 2, cat: "Equality, Reservation & DPSP" },
    { q: "Q33. In Indra Sawhney v. Union of India, the Supreme Court held, among other things, that:", opts: ["Reservation under Article 16(4) ordinarily cannot exceed 50 per cent, subject to exceptional circumstances, and creamy-layer exclusion applies to OBC reservation.", "Reservation in promotion is automatically available under Article 16(4).", "Economic criteria alone determine social backwardness under Article 16(4).", "Article 16(4) is an unrestricted fundamental right of every backward class."], ans: 0, cat: "Equality, Reservation & DPSP" },
    { q: "Q34. Which statement about the 103rd Constitutional Amendment is correct?", opts: ["It introduced reservation for economically weaker sections under Articles 15(6) and 16(6), and its validity was upheld in Janhit Abhiyan.", "It introduced reservation in promotion under Article 16(4A).", "It abolished the creamy-layer principle in all reservation categories.", "It amended only the Ninth Schedule."], ans: 0, cat: "Equality, Reservation & DPSP" },
    { q: "Q35. Consider the following statements about Article 17:\n- It abolishes untouchability and forbids its practice in any form.\n- It is enforceable against private individuals as well as the State.\n- Parliament may prescribe punishment for its enforcement.\n- Its operation is restricted to government employment.\nWhich are correct?", opts: ["1 and 4 only", "2 and 3 only", "1, 2 and 3 only", "1, 2, 3 and 4"], ans: 2, cat: "Equality, Reservation & DPSP" },
    { q: "Q36. A religious denomination claims that every activity associated with its institution is immune from State regulation. Which statement best reflects Article 26 jurisprudence?", opts: ["Every activity, religious or secular, is constitutionally immune.", "The right is subject to public order, morality and health, and secular activities associated with religious practice may be regulated according to constitutional principles.", "Article 26 applies only to institutions established by the State.", "Article 26 overrides all other Fundamental Rights."], ans: 1, cat: "Equality, Reservation & DPSP" },
    { q: "Q37. In Shirur Mutt case, the Supreme Court principally developed which principle?", opts: ["The distinction between essential religious practices and secular activities associated with religion", "The basic structure doctrine", "The right to privacy", "The doctrine of prospective overruling"], ans: 0, cat: "Equality, Reservation & DPSP" },
    { q: "Q38. Consider the following statements about Article 28:\n- Article 28(1) prohibits religious instruction in educational institutions wholly maintained out of State funds, subject to the constitutional exception.\n- Article 28(2) concerns institutions administered by the State but established under an endowment or trust requiring religious instruction.\n- Article 28(3) protects against being compelled to participate in religious instruction or worship in certain recognised or aided institutions without consent.\n- Article 28 prohibits all religious instruction in every private educational institution.\nWhich are correct?", opts: ["1 and 2 only", "2, 3 and 4 only", "1, 2 and 3 only", "1, 2, 3 and 4"], ans: 2, cat: "Equality, Reservation & DPSP" },
    { q: "Q39. In T.M.A. Pai Foundation v. State of Karnataka, the Supreme Court recognised that:", opts: ["Minority institutions have an unrestricted right to administer without regulation.", "Educational institutions have no autonomy under Article 19 or Article 30.", "The right to establish and administer educational institutions is subject to reasonable regulation to maintain educational standards and prevent maladministration.", "Only religious minorities can establish educational institutions."], ans: 2, cat: "Equality, Reservation & DPSP" },
    { q: "Q40. Which of the following is the most accurate statement about Article 29(2)?", opts: ["It prohibits denial of admission into State-maintained or State-aided educational institutions solely on specified grounds of religion, race, caste or language.", "It grants an absolute right to admission in every private educational institution.", "It applies only to minority institutions.", "It prohibits all forms of educational reservation."], ans: 0, cat: "Equality, Reservation & DPSP" },
    { q: "Q41. Consider the following statements regarding Directive Principles:\n- Article 37 declares that they are not enforceable by any court.\n- Article 37 also declares that they are fundamental in the governance of the country.\n- The State is obliged to apply them in making laws.\n- They automatically override Fundamental Rights whenever a conflict arises.\nWhich are correct?", opts: ["1, 2 and 3 only", "1 and 4 only", "2 and 4 only", "1, 2, 3 and 4"], ans: 0, cat: "Equality, Reservation & DPSP" },
    { q: "Q42. Match the Directive Principles:\n1. Article 39A - a. Organisation of village panchayats\n2. Article 40 - b. Equal justice and free legal aid\n3. Article 44 - c. Uniform Civil Code\n4. Article 48A - d. Protection and improvement of environment", opts: ["1-b, 2-a, 3-c, 4-d", "1-a, 2-b, 3-d, 4-c", "1-c, 2-d, 3-a, 4-b", "1-d, 2-c, 3-b, 4-a"], ans: 0, cat: "Equality, Reservation & DPSP" },
    { q: "Q43. A State enacts a law to implement a Directive Principle. The law restricts a Fundamental Right. Which statement is constitutionally most appropriate?", opts: ["Any law implementing a Directive Principle is automatically valid.", "Directive Principles are irrelevant in interpreting Fundamental Rights.", "Fundamental Rights cease to operate whenever a Directive Principle is involved.", "The court must examine the applicable constitutional provisions and any valid protection; the mere invocation of a Directive Principle does not automatically immunise the law."], ans: 3, cat: "Equality, Reservation & DPSP" },
    { q: "Q44. Which case is most closely associated with the principle that the State may not deny the right to life and personal liberty through arbitrary procedure?", opts: ["A.K. Gopalan v. State of Madras", "Maneka Gandhi v. Union of India", "Shankari Prasad v. Union of India", "Kihoto Hollohan v. Zachillhu"], ans: 1, cat: "Equality, Reservation & DPSP" },
    { q: "Q45. Which of the following is not a Fundamental Right in its present constitutional form?", opts: ["Protection against double jeopardy", "Right to property under Article 300A", "Freedom of conscience", "Right to constitutional remedies"], ans: 1, cat: "Equality, Reservation & DPSP" },
    { q: "Q46. Consider the following statements about legislative relations:\n- Residuary legislative power vests in Parliament.\n- Parliament may legislate on State List matters under Article 249 following a Rajya Sabha resolution.\n- Parliament may legislate on State List matters to implement international treaties under Article 253.\n- A State Legislature may legislate on any Union List matter if the Governor gives assent.\nWhich are correct?", opts: ["1, 2 and 3 only", "1 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 0, cat: "Federalism, Legislature & Executive" },
    { q: "Q47. Parliament legislates on a State List subject pursuant to an Article 249 resolution. The resolution later ceases to operate. What happens to the Parliamentary law?", opts: ["It becomes void immediately upon expiry of the resolution.", "It ceases to have effect on the expiry of six months after the resolution ceases, except as respects things done or omitted to be done before then.", "It remains permanently in force without any limitation.", "It is automatically converted into a State law."], ans: 1, cat: "Federalism, Legislature & Executive" },
    { q: "Q48. A State Legislature passes a law on a Concurrent List subject. Parliament later enacts a law on the same subject, and the two provisions are irreconcilably inconsistent. The State law has not received Presidential assent. Which provision governs?", opts: ["Article 249", "Article 263", "Article 254", "Article 368"], ans: 2, cat: "Federalism, Legislature & Executive" },
    { q: "Q49. A State law on a Concurrent List subject receives Presidential assent despite repugnancy with an earlier Parliamentary law. Which statement is correct?", opts: ["The State law may prevail within that State, but Parliament retains power to enact a subsequent law adding to, amending, varying or repealing it.", "The State law prevails throughout India permanently.", "Presidential assent makes the State law immune from judicial review.", "The State law automatically amends the Constitution."], ans: 0, cat: "Federalism, Legislature & Executive" },
    { q: "Q50. A Bill seeks to alter the name and boundaries of a State. Consider the following statements:\n- It can be introduced only on the recommendation of the President.\n- The President refers it to the concerned State Legislature for its views.\n- The views of the State Legislature are binding on Parliament.\n- The procedure is governed by Article 3.\nWhich are correct?", opts: ["1, 2 and 4 only", "1 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 0, cat: "Federalism, Legislature & Executive" },
    { q: "Q51. Which of the following is correct concerning the election of the President of India?", opts: ["Elected and nominated members of both Houses of Parliament participate.", "Members of State Legislative Councils participate.", "Elected members of both Houses of Parliament and elected members of the Legislative Assemblies of States and specified Union Territories participate.", "All adult citizens participate directly."], ans: 2, cat: "Federalism, Legislature & Executive" },
    { q: "Q52. Consider the following statements regarding the President:\n- The President is elected by proportional representation through the single transferable vote.\n- Voting takes place by secret ballot.\n- The President may be impeached for violation of the Constitution.\n- Impeachment may be initiated only in the Lok Sabha.\nWhich are correct?", opts: ["1, 2 and 3 only", "1 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 0, cat: "Federalism, Legislature & Executive" },
    { q: "Q53. The President returns an ordinary Bill to Parliament for reconsideration. Parliament passes it again, with or without amendments, and presents it to the President. What is the constitutional position?", opts: ["The President may return it a second time.", "The President must give assent.", "The President may refer it to the Supreme Court under Article 143.", "The Bill automatically lapses."], ans: 1, cat: "Federalism, Legislature & Executive" },
    { q: "Q54. Consider the following statements concerning Money Bills:\n- A Money Bill can be introduced only in the Lok Sabha.\n- The President's recommendation is required for its introduction.\n- The Rajya Sabha must return it within fourteen days.\n- The Speaker's certification is immune from all judicial review in every conceivable circumstance.\nWhich are correct?", opts: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 1, cat: "Federalism, Legislature & Executive" },
    { q: "Q55. A Bill contains provisions relating to taxation, appropriation and other matters not listed in Article 110. Which is the most appropriate test for deciding whether it is a Money Bill?", opts: ["Whether it is financially important in the opinion of the Finance Minister.", "Whether it has been introduced during the Budget Session.", "Whether its provisions fall within the constitutional definition in Article 110, including incidental matters.", "Whether the Rajya Sabha agrees to classify it as a Money Bill."], ans: 2, cat: "Federalism, Legislature & Executive" },
    { q: "Q56. Which of the following Bills cannot be referred to a joint sitting of Parliament under Article 108?", opts: ["An ordinary Bill rejected by the other House", "An ordinary Bill on which the Houses disagree over amendments", "A Constitutional Amendment Bill", "An ordinary Bill on which the other House has not passed it for more than six months"], ans: 2, cat: "Federalism, Legislature & Executive" },
    { q: "Q57. Consider the following statements about the Council of Ministers:\n- It is collectively responsible to the Lok Sabha.\n- The Prime Minister is appointed by the President.\n- A Minister who is not a member of either House for six consecutive months ceases to be a Minister.\n- The Constitution limits the total number of Union Ministers, including the Prime Minister, to 15 per cent of the total strength of the Lok Sabha.\nWhich are correct?", opts: ["1, 2 and 3 only", "1, 2 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 3, cat: "Federalism, Legislature & Executive" },
    { q: "Q58. A Governor reserves a State Bill for the consideration of the President. The Bill is then returned for reconsideration. Which statement is correct under Article 201?", opts: ["The State Legislature is constitutionally prohibited from reconsidering it.", "The Bill automatically becomes law after six months.", "The Governor must assent to the Bill.", "The President may direct the Governor to return the Bill, whereupon the State Legislature must reconsider it within six months; if passed again, it is presented again to the President."], ans: 3, cat: "Federalism, Legislature & Executive" },
    { q: "Q59. The Governor's power to promulgate an ordinance under Article 213 is subject to which condition?", opts: ["It may be exercised whenever the Governor personally considers it convenient.", "It may be exercised when the Legislature is not in session and the Governor is satisfied that circumstances render immediate action necessary, subject to constitutional limitations.", "It may be exercised only after the President's Rule.", "It may be exercised even when both Houses of the State Legislature are in session."], ans: 1, cat: "Federalism, Legislature & Executive" },
    { q: "Q60. Which statement correctly distinguishes Articles 123 and 213?", opts: ["Article 123 concerns ordinances by the President; Article 213 concerns ordinances by the Governor.", "Article 123 concerns State ordinances; Article 213 concerns Union ordinances.", "Both confer ordinance-making power on the Prime Minister.", "Neither is subject to legislative control."], ans: 0, cat: "Federalism, Legislature & Executive" },
    { q: "Q61. Consider the following statements concerning the Supreme Court:\n- Article 131 provides for its original jurisdiction in specified federal disputes.\n- Article 136 confers special leave jurisdiction.\n- Article 143 provides for advisory jurisdiction.\n- Article 141 declares that the law declared by the Supreme Court is binding on all courts within the territory of India.\nWhich are correct?", opts: ["1, 2 and 3 only", "1, 2 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q62. A litigant seeks special leave to appeal under Article 136. Which statement is correct?", opts: ["The Supreme Court is bound to grant leave whenever a substantial question of law is raised.", "Article 136 excludes tribunals.", "Article 136 is available only against High Court judgments.", "Article 136 confers a discretionary jurisdiction and does not create an ordinary right of appeal."], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q63. A dispute arises between the Union and a State concerning a legal right. Which condition is essential for the Supreme Court's original jurisdiction under Article 131?", opts: ["The dispute must involve a private individual.", "It must first be referred to the Finance Commission.", "It must concern a criminal offence.", "It must be a dispute between parties specified in Article 131 and involve a legal right."], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q64. Which statement about the Supreme Court's advisory jurisdiction under Article 143 is correct?", opts: ["The President may refer a question of law or fact of public importance for the Court's opinion.", "Every opinion delivered under Article 143 is equivalent to a decree in an ordinary appeal.", "The President is constitutionally bound to accept the opinion.", "Article 143 may be invoked only by State Governors."], ans: 0, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q65. Consider the following statements about judicial appointments:\n- The collegium system is expressly written into Article 124.\n- The collegium system developed through judicial interpretation.\n- The Second and Third Judges Cases are central to its development.\n- The NJAC framework was struck down in 2015.\nWhich are correct?", opts: ["1 and 2 only", "1, 2, 3 and 4", "1, 3 and 4 only", "2, 3 and 4 only"], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q66. In the NJAC judgment, the Supreme Court's central constitutional concern was most closely related to:", opts: ["The abolition of judicial independence as a basic feature", "The financial autonomy of State Legislatures", "The absence of a directly elected President", "The lack of a uniform civil code"], ans: 0, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q67. A Judge of the Supreme Court is proposed to be removed. Which procedure is constitutionally required?", opts: ["Removal by the President on the advice of the Prime Minister alone", "An address by each House of Parliament supported by the prescribed special majority on the ground of proved misbehaviour or incapacity", "A simple majority in the Lok Sabha", "A resolution of the Bar Council of India"], ans: 1, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q68. Which of the following statements about High Courts is incorrect?", opts: ["High Courts are Courts of Record.", "High Courts may issue writs under Article 226.", "High Courts may exercise superintendence over courts and tribunals within their territorial jurisdiction under Article 227, subject to constitutional limitations.", "High Courts are constitutionally prohibited from reviewing administrative action."], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q69. In S.R. Bommai v. Union of India, which proposition was established?", opts: ["A Proclamation under Article 356 is beyond judicial review.", "President's Rule automatically dissolves the Legislative Assembly.", "The Governor's report is conclusive evidence of constitutional breakdown.", "Secularism is a basic feature and a Proclamation under Article 356 is subject to judicial review."], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q70. A Governor reports that the Chief Minister has lost majority. The Governor recommends President's Rule without allowing a floor test, despite no exceptional circumstances preventing one. Which case is particularly relevant?", opts: ["S.R. Bommai v. Union of India", "Berubari Union case", "Shankari Prasad v. Union of India", "A.K. Gopalan v. State of Madras"], ans: 0, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q71. In Nabam Rebia v. Deputy Speaker, the Supreme Court examined, among other matters:", opts: ["The constitutional limits on the Governor's discretion and the relationship between the Governor and the State Legislature", "The power of Parliament to amend the Preamble", "The jurisdiction of the Finance Commission", "The right to property under Article 300A"], ans: 0, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q72. A Governor summons the Legislative Assembly on his own initiative despite the absence of constitutionally recognised circumstances supporting such discretion. Which is the strongest relevant principle?", opts: ["The Governor possesses unlimited personal discretion under Article 163.", "The Governor is outside judicial review.", "The Governor is the elected head of the State.", "The Governor is ordinarily required to act on the aid and advice of the Council of Ministers, subject to limited constitutionally recognised discretion."], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q73. Which constitutional authority is responsible for conducting elections to Parliament, State Legislatures and the offices of President and Vice-President?", opts: ["State Election Commission", "Union Public Service Commission", "Finance Commission", "Election Commission of India"], ans: 3, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q74. Consider the following statements about the Comptroller and Auditor General of India:\n- The CAG is appointed by the President.\n- The CAG is removed in like manner and on like grounds as a Judge of the Supreme Court.\n- The CAG's reports relating to Union accounts are submitted to the President.\n- The CAG is subordinate to the Ministry of Finance.\nWhich are correct?", opts: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 1, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q75. The Finance Commission under Article 280 is constituted by the President:", opts: ["Every year", "Every five years or earlier, if necessary", "Every ten years", "Only during a Financial Emergency"], ans: 1, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q76. Match the constitutional bodies with their relevant Articles:\n1. Election Commission of India - a. Article 280\n2. Finance Commission - b. Article 324\n3. UPSC - c. Article 315\n4. CAG - d. Article 148", opts: ["1-b, 2-a, 3-c, 4-d", "1-a, 2-b, 3-d, 4-c", "1-c, 2-d, 3-a, 4-b", "1-d, 2-c, 3-b, 4-a"], ans: 0, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q77. Which of the following statements about the Attorney General of India is correct?", opts: ["The Attorney General is appointed by Parliament.", "The Attorney General has the right to vote in both Houses of Parliament.", "The Attorney General is the highest law officer of the Union and is qualified to be appointed a Judge of the Supreme Court.", "The Attorney General has a fixed constitutional tenure of five years."], ans: 2, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q78. Consider the following statements regarding the anti-defection law:\n- It is contained in the Tenth Schedule.\n- A member may be disqualified for voluntarily giving up membership of the political party.\n- A member may be disqualified for voting or abstaining contrary to the party direction without prior permission, unless condoned within the prescribed period.\n- The original one-third split exception continues to exist.\nWhich are correct?", opts: ["1, 2 and 3 only", "1 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 0, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q79. In Kihoto Hollohan v. Zachillhu, the Supreme Court held that:", opts: ["Decisions of the Speaker under the Tenth Schedule are completely immune from judicial review.", "The Speaker's decision is subject to judicial review on limited grounds, generally after the decision is made.", "The Tenth Schedule is unconstitutional in its entirety.", "Only the Election Commission may decide disqualification under the Tenth Schedule."], ans: 1, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q80. A Speaker deliberately delays deciding a disqualification petition for an unreasonable period. Which statement is most accurate?", opts: ["The Speaker's jurisdiction is unlimited and delay can never be reviewed.", "The Speaker's role is subject to constitutional judicial review; unreasonable delay may invite judicial scrutiny in appropriate circumstances.", "The petition automatically stands dismissed after six months.", "The President must decide the petition."], ans: 1, cat: "Judiciary & Constitutional Bodies" },
    { q: "Q81. Consider the following statements regarding National Emergency:\n- Article 352 permits a Proclamation on grounds of war, external aggression or armed rebellion.\n- The President may issue the Proclamation only on the written advice of the Union Cabinet.\n- Parliamentary approval is required within one month.\n- Approval requires a simple majority of members present and voting.\nWhich are correct?", opts: ["1 and 2 only", "1, 2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q82. A National Emergency is proclaimed on the ground of armed rebellion. Which statement regarding Article 19 is correct?", opts: ["Article 19 is automatically suspended in every National Emergency.", "Article 358 does not automatically operate in an Emergency proclaimed solely on the ground of armed rebellion.", "Article 19 can never be restricted during an Emergency.", "Article 19 is suspended only after approval by the Supreme Court."], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q83. Consider the following statements concerning Article 359:\n- The President may suspend the right to move courts for enforcement of specified Fundamental Rights.\n- Articles 20 and 21 are excluded from the scope of such suspension.\n- Article 359 automatically suspends the substantive existence of every Fundamental Right.\n- The Presidential order must specify the rights whose enforcement is suspended.\nWhich are correct?", opts: ["1 and 2 only", "1, 2 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q84. Which statement correctly distinguishes Articles 358 and 359?", opts: ["Article 358 concerns Article 19 in specified National Emergencies; Article 359 concerns suspension of the right to move courts for enforcement of specified Fundamental Rights, subject to constitutional exclusions.", "Both provisions automatically suspend every Fundamental Right.", "Article 358 applies only during Financial Emergency.", "Article 359 permits suspension of Articles 20 and 21."], ans: 0, cat: "Emergency & Amendments" },
    { q: "Q85. A Proclamation under Article 356 is approved by both Houses. Which statement about its continuation is correct?", opts: ["It may continue indefinitely without parliamentary approval.", "It ordinarily requires parliamentary approval every six months and is subject to the constitutional maximum period and additional conditions for extension beyond one year.", "It must end after one month.", "It may continue for five years without any additional conditions."], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q86. Consider the following statements concerning Financial Emergency:\n- It is provided under Article 360.\n- It may be proclaimed if the financial stability or credit of India or any part of its territory is threatened.\n- During its operation, the Union may issue directions concerning financial propriety.\n- It automatically dissolves State Legislatures.\nWhich are correct?", opts: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q87. A Constitutional Amendment Bill is passed by the Lok Sabha with the required special majority but rejected by the Rajya Sabha. What is the correct position?", opts: ["A joint sitting may be called.", "The Bill is deemed passed after six months.", "The Bill fails because each House must pass it separately with the prescribed majority.", "The President may pass the Bill by ordinance."], ans: 2, cat: "Emergency & Amendments" },
    { q: "Q88. Which of the following amendments requires ratification by at least half of the State Legislatures?", opts: ["An amendment changing the election of the President", "An amendment changing the salary of a Union Minister", "An amendment altering the number of Lok Sabha members within the constitutional framework", "An amendment adding a new Fundamental Duty without affecting any provision requiring State ratification"], ans: 0, cat: "Emergency & Amendments" },
    { q: "Q89. Consider the following statements regarding the 44th Constitutional Amendment:\n- It replaced the expression \"internal disturbance\" with \"armed rebellion\" in Article 352.\n- It introduced the requirement of written advice of the Union Cabinet for a National Emergency.\n- It ensured that Articles 20 and 21 cannot be included in an Article 359 order.\n- It made the right to property a Fundamental Right.\nWhich are correct?", opts: ["1 and 4 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q90. Match the Constitutional Amendments:\n1. 42nd - a. GST\n2. 52nd - b. Fundamental Duties and major constitutional changes\n3. 73rd - c. Anti-defection\n4. 101st - d. Panchayati Raj institutions", opts: ["1-b, 2-c, 3-d, 4-a", "1-c, 2-b, 3-a, 4-d", "1-d, 2-a, 3-b, 4-c", "1-a, 2-d, 3-c, 4-b"], ans: 0, cat: "Emergency & Amendments" },
    { q: "Q91. Which of the following is correctly matched?", opts: ["Fifth Schedule — Administration of tribal areas in certain north-eastern States", "Sixth Schedule — Administration of tribal areas in Assam, Meghalaya, Tripura and Mizoram.", "Eighth Schedule — Anti-defection", "Tenth Schedule — Recognised languages"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q92. Consider the following statements regarding Panchayats:\n- Part IX was inserted by the 73rd Amendment.\n- The Eleventh Schedule lists subjects that may be devolved to Panchayats.\n- The Constitution requires a five-year term, subject to dissolution and election provisions.\n- Every Panchayat must have exactly three tiers irrespective of population and constitutional exceptions.\nWhich are correct?", opts: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q93. A Panchayat is dissolved before the expiry of its term. Which statement is correct?", opts: ["Elections to constitute the Panchayat must ordinarily be completed within six months from the date of dissolution, subject to the constitutional exception where the remainder of the term is less than six months.", "No fresh election is required.", "The State Election Commission must wait until the next general election.", "The Governor automatically becomes the Panchayat President."], ans: 0, cat: "Emergency & Amendments" },
    { q: "Q94. Which statement concerning the State Election Commission is correct?", opts: ["It is responsible for elections to Parliament and the offices of President and Vice-President.", "It supervises and controls elections to Panchayats and Municipalities, subject to the constitutional scheme.", "It is appointed by the Chief Minister.", "It is a department of the Election Commission of India."], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q95. Which Article provides for the Inter-State Council?", opts: ["Article 262", "Article 263", "Article 280", "Article 312"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q96. A dispute arises concerning the use of an inter-State river. Which constitutional provision specifically empowers Parliament to provide for adjudication of such disputes and to exclude jurisdiction of courts in the prescribed manner?", opts: ["Article 262", "Article 263", "Article 280", "Article 300"], ans: 0, cat: "Emergency & Amendments" },
    { q: "Q97. Which of the following is the most accurate statement about the doctrine of pith and substance?", opts: ["It determines whether a law is retrospective.", "It examines the true nature and character of legislation to determine legislative competence despite incidental encroachment on another list.", "It invalidates every law touching two legislative lists.", "It applies only to constitutional amendments."], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q98. A State Legislature enacts a law substantially within its legislative competence but incidentally affects a Union List subject. The law is challenged solely on the ground of incidental encroachment. Which doctrine is most relevant?", opts: ["Doctrine of eclipse", "Doctrine of pith and substance", "Doctrine of prospective overruling", "Doctrine of waiver"], ans: 1, cat: "Emergency & Amendments" },
    { q: "Q99. In D.C. Wadhwa v. State of Bihar and Krishna Kumar Singh v. State of Bihar, the Supreme Court addressed the misuse of ordinance-making power. Which statement best reflects the constitutional principle?", opts: ["Ordinances may be repeatedly re-promulgated as a routine substitute for legislation.", "Ordinance-making power is a parallel and permanent legislative power.", "Re-promulgation to bypass the legislature is constitutionally impermissible, and ordinance-making power is subject to constitutional limitations.", "Ordinances cannot be reviewed by constitutional courts."], ans: 2, cat: "Emergency & Amendments" },
    { q: "Q100. A constitutional amendment is passed by the required special majority and receives Presidential assent. It abolishes judicial review, undermines federalism and destroys the independence of the judiciary. Which is the strongest constitutional ground for challenging it?", opts: ["Doctrine of severability alone", "Doctrine of eclipse", "Doctrine of pith and substance", "Basic structure doctrine"], ans: 3, cat: "Emergency & Amendments" }
];

while (questions.length < 100) {
    questions.push({
        q: `Constitutional Law Grand Test Question #${questions.length + 1}: Detailed constitutional law scenario involving fundamental rights, directive principles, or judicial review.`,
        opts: ["Article 14 - Right to Equality", "Article 21 - Personal Liberty", "Article 32 - Remedies", "Basic Structure Doctrine"],
        ans: 3, cat: "General Principles"
    });
}

// --- 2. EXAM STATE INIT ---
let totalQuestions = questions.length;
let userAnswers = new Array(totalQuestions).fill(null);
let userStatus = new Array(totalQuestions).fill('not-visited');
if (totalQuestions > 0) userStatus[0] = 'unanswered';

let currentIndex = 0;
let warnings = 0;
let timeRemaining = 7199; // 120 minutes
let examActive = false;
let phoneDetectionInterval = null;

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('total-score-display');
    if(display) display.innerText = totalQuestions;
});

// --- 3. CAMERA SETUP ---
document.getElementById('request-cam-btn')?.addEventListener('click', async () => {
    const loading = document.getElementById('camera-loading');
    const errorMsg = document.getElementById('camera-error');
    const camBtn = document.getElementById('request-cam-btn');
    
    if (loading) loading.classList.remove('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');
    if (camBtn) camBtn.classList.add('hidden');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('proctor-video');
        if (video) {
            video.srcObject = stream;
            video.classList.remove('hidden');
        }
        if (loading) loading.classList.add('hidden');
        document.getElementById('proceed-to-login')?.classList.remove('hidden');
    } catch (err) {
        console.error(err);
        if (loading) loading.classList.add('hidden');
        if (errorMsg) errorMsg.classList.remove('hidden');
        if (camBtn) camBtn.classList.remove('hidden');
    }
});

document.getElementById('proceed-to-login')?.addEventListener('click', () => {
    document.getElementById('camera-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
});

// --- 4. START EXAM ---
document.getElementById('start-exam-btn')?.addEventListener('click', () => {
    const name = document.getElementById('candidate-name').value.trim();
    const uni = document.getElementById('candidate-university').value.trim();
    
    if (!name || !uni) return alert("Please fill in both fields.");
    
    window.candidateEmail = uni; 
    document.getElementById('display-roll').innerText = uni;
    
    document.getElementById('login-screen').style.display = 'none';
    const examScreen = document.getElementById('exam-screen');
    examScreen.classList.remove('hidden');
    examScreen.style.display = 'flex';
    
    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(e => {});
    
    examActive = true;
    initGrid();
    loadQuestion(0);
    startTimer();
    setTimeout(initProctoring, 1000); 
});

// --- 5. GRID & NAVIGATION ---
function initGrid() {
    const grid = document.getElementById('palette-grid');
    grid.innerHTML = '';
    for (let i = 0; i < totalQuestions; i++) {
        const btn = document.createElement('button');
        btn.innerText = i + 1;
        btn.className = `w-10 h-10 rounded text-sm font-bold flex items-center justify-center border border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-500`;
        btn.onclick = () => loadQuestion(i);
        btn.id = `grid-btn-${i}`;
        grid.appendChild(btn);
    }
    updateGridUI();
}

function loadQuestion(index) {
    if (userStatus[currentIndex] !== 'answered' && userStatus[currentIndex] !== 'marked') {
        userStatus[currentIndex] = userAnswers[currentIndex] !== null ? 'answered' : 'unanswered';
    }
    currentIndex = index;
    if (userStatus[currentIndex] === 'not-visited') userStatus[currentIndex] = 'unanswered';
    
    const q = questions[currentIndex];
    document.getElementById('q-current-num').innerText = currentIndex + 1;
    document.getElementById('question-category').innerText = q.cat || "General";
    document.getElementById('question-text').innerText = q.q;
    
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    q.opts.forEach((optText, i) => {
        const div = document.createElement('div');
        const isSelected = userAnswers[currentIndex] === i;
        div.className = `p-4 border rounded cursor-pointer transition-colors flex items-center gap-4 ${isSelected ? 'border-gold bg-gold/10' : 'border-gray-600 bg-navy hover:bg-gray-800'}`;
        div.onclick = () => {
            userAnswers[currentIndex] = i;
            userStatus[currentIndex] = 'answered';
            loadQuestion(currentIndex);
        };
        
        const badge = document.createElement('div');
        badge.className = `w-8 h-8 rounded border flex items-center justify-center font-bold text-sm shrink-0 ${isSelected ? 'border-gold text-gold' : 'border-gray-500 text-gray-400'}`; 
        badge.innerText = labels[i]; 
        const text = document.createElement('span'); 
        text.innerText = optText; 
        div.appendChild(badge); 
        div.appendChild(text); 
        optsContainer.appendChild(div); 
    }); 
    
    document.getElementById('prev-btn').disabled = currentIndex === 0; 
    updateGridUI(); 
} 

document.getElementById('next-btn')?.addEventListener('click', () => { if (currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); }); 
document.getElementById('prev-btn')?.addEventListener('click', () => { if (currentIndex > 0) loadQuestion(currentIndex - 1); }); 
document.getElementById('clear-option-btn')?.addEventListener('click', () => { userAnswers[currentIndex] = null; userStatus[currentIndex] = 'unanswered'; loadQuestion(currentIndex); }); 
document.getElementById('mark-review-btn')?.addEventListener('click', () => { userStatus[currentIndex] = 'marked'; updateGridUI(); if (currentIndex < totalQuestions - 1) loadQuestion(currentIndex + 1); }); 

function updateGridUI() { 
    let counts = { answered: 0, unanswered: 0, marked: 0, 'not-visited': 0 }; 
    for (let i = 0; i < totalQuestions; i++) { 
        counts[userStatus[i]]++; 
        const btn = document.getElementById(`grid-btn-${i}`);
        if (!btn) continue;
        
        btn.className = `w-10 h-10 rounded text-sm font-bold flex items-center justify-center border `;
        if (i === currentIndex) btn.className += 'ring-2 ring-white ';
        
        if (userStatus[i] === 'answered') btn.className += 'bg-green-600 border-green-500 text-white';
        else if (userStatus[i] === 'marked') btn.className += 'bg-yellow-600 border-yellow-500 text-white';
        else if (userStatus[i] === 'unanswered') btn.className += 'bg-red-600 border-red-500 text-white';
        else btn.className += 'bg-gray-700 border-gray-600 text-gray-300';
    }
    
    document.getElementById('count-answered').innerText = counts.answered;
    document.getElementById('count-unanswered').innerText = counts.unanswered;
    document.getElementById('count-marked').innerText = counts.marked;
    document.getElementById('count-not-visited').innerText = counts['not-visited'];
}

function startTimer() {
    const display = document.getElementById('timer-display');
    const intv = setInterval(() => {
        if (!examActive) return clearInterval(intv);
        if (timeRemaining <= 0) { clearInterval(intv); submitExam(); return; }
        timeRemaining--;
        const h = String(Math.floor(timeRemaining / 3600)).padStart(2, '0');
        const m = String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, '0');
        const s = String(timeRemaining % 60).padStart(2, '0');
        display.innerText = `${h}:${m}:${s}`; 
    }, 1000); 
} 

// --- 6. EXAM SUBMISSION (SECURE MONGODB FETCH) ---
async function submitExam() {
    examActive = false;
    if (phoneDetectionInterval) clearInterval(phoneDetectionInterval);
    
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('warning-modal')?.classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    if (document.fullscreenElement) document.exitFullscreen().catch(e => {});
    const video = document.getElementById('proctor-video');
    if (video && video.srcObject) video.srcObject.getTracks().forEach(track => track.stop());

    const candidateName = document.getElementById('candidate-name').value.trim() || "Anonymous";
    const candidateIdentifier = window.candidateEmail || "unknown";

    try {
        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: candidateName,
                email: candidateIdentifier,
                userAnswers: userAnswers
            })
        });
        
        const data = await res.json();
        if (data.success) {
            document.getElementById('final-score').innerText = data.score;
        }
    } catch (err) {
        console.error("Submission failed:", err);
    }
}

document.getElementById('submit-exam-btn')?.addEventListener('click', () => {
    if (confirm("Are you sure you want to finalize and submit your test?")) submitExam();
});

// --- 7. ANTI-CHEAT MONGODB LOGGING ---
let absenceTimer = 0;
let objectDetector = null;

async function initProctoring() {
    const videoElement = document.getElementById('proctor-video');
    if (!videoElement) return;

    if (typeof cocoSsd !== 'undefined') {
        try {
            objectDetector = await cocoSsd.load();
            phoneDetectionInterval = setInterval(async () => {
                if (!examActive || !objectDetector) return;
                const predictions = await objectDetector.detect(videoElement);
                if (predictions.some(p => p.class === 'cell phone' && p.score > 0.5)) {
                    triggerWarning(); 
                    captureAndUploadViolationSnapshot("Phone Detected");
                }
            }, 1500);
        } catch (e) {}
    }

    if (typeof FaceMesh !== 'undefined') {
        try {
            const faceMesh = new FaceMesh({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}` });
            faceMesh.setOptions({ maxNumFaces: 1, refineLandmarks: true, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
            faceMesh.onResults((results) => {
                if (!examActive) return;
                if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
                    absenceTimer++;
                    if (absenceTimer > 3) { 
                        triggerWarning(); 
                        captureAndUploadViolationSnapshot("Face Not Detected"); 
                        absenceTimer = 0; 
                    }
                } else { absenceTimer = 0; }
            });
            const camera = new Camera(videoElement, { onFrame: async () => { if(examActive) await faceMesh.send({image: videoElement}); }, width: 640, height: 480 });
            camera.start();
        } catch (err) {}
    }
}

function triggerWarning() { 
    if (!examActive) return; 
    warnings++; 
    document.getElementById('warning-count').innerText = `${warnings}/3`;
    document.getElementById('modal-warning-count').innerText = warnings;
    if (warnings >= 3) {
        alert("Maximum violations reached. Auto-submitting exam."); 
        submitExam();
    } else {
        document.getElementById('warning-modal').classList.remove('hidden');
    }
}

document.getElementById('dismiss-warning-btn')?.addEventListener('click', () => {
    document.getElementById('warning-modal').classList.add('hidden');
    if (document.documentElement.requestFullscreen && examActive) document.documentElement.requestFullscreen().catch(e => {});
});

window.addEventListener("blur", () => { 
    if (examActive) { 
        triggerWarning(); 
        captureAndUploadViolationSnapshot("Lost Focus (Tab Switch)"); 
    } 
});

function captureAndUploadViolationSnapshot(violationType) {
    const video = document.getElementById('proctor-video');
    if (!video) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640; 
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d'); 
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const base64Image = canvas.toDataURL('image/jpeg', 0.5); 

    fetch('/api/violation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: window.candidateEmail || "anon",
            violation: violationType,
            snapshotUrl: base64Image
        })
    }).catch(err => console.error(err));
}