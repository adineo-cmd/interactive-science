# Source pack — subjects/sports-science/expert/testing-and-analytics-in-elite-sport
Lesson title: Testing & Analytics in Elite Sport
Level: expert
Match confidence: 0.79

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 0.79 — LibreTexts: 13.3: Testing the Significance of the Correlation Coefficient
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Fresno_City_College/Book%3A_Business_Statistics_Customized_(OpenStax)/13%3A_Linear_Regression_and_Correlation/13.03%3A_Testing_the_Significance_of_the_Correlation_Coefficient

13.3: Testing the Significance of the Correlation Coefficient
The correlation coefficient, \(r\), tells us about the strength and direction of the linear relationship between \(X_1\) and \(X_2\).
The sample data are used to compute \(r\), the correlation coefficient for the sample. If we had data for the entire population, we could find the population correlation coefficient. But because we have only sample data, we cannot calculate the population correlation coefficient. The sample correlation coefficient, r, is our estimate of the unknown population correlation coefficient.
-
The hypothesis test lets us decide whether the value of the population correlation coefficient \rho is "close to zero" or "significantly different from zero". We decide this based on the sample correlation coefficient \(r\) and the sample size \(n\).
If the test concludes that the correlation coefficient is significantly different from zero, we say that the correlation coefficient is "significant."
-
What the Hypotheses Mean in Words
-
Drawing a
Conclusion
There are two methods of making the decision concerning the hypothesis. The test statistic to test this hypothesis is:
\[t_{c}=\frac{r}{\sqrt{\left(1-r^{2}\right) /(n-2)}}\nonumber\]
\[t_{c}=\frac{r \sqrt{n-2}}{\sqrt{1-r^{2}}}\nonumber\]
Where the second formula is an equivalent form of the test statistic, \(n\) is the sample size and the degrees of freedom are \(n-2\). This is a \(t\)-statistic and operates in the same way as other \(t\) tests. Calculate the \(t\)-value and compare that with the critical value from the \(t\)-table at the appropriate degrees of freedom and the level of confidence you wish to maintain. If the calculated value is in the tail then reject the null hypothesis that there is no linear relationship between these two independent random variables. If the calculated \(t\)-value is NOT in the tailed then cannot reject the null hypothesis that there is no linear relationship between the two variables.
A quick shorthand way to test correlations is the relationship between the sample size and the correlation. If:
\[|r| \geq \frac{2}{\sqrt{n}}\nonumber\]
then this implies that the correlation between the two variables demonstrates that a linear relationship exists and is statistically significant at approximately the 0.05 level of significance. As the formula indicates, there is an inverse relationship between the sample size and the required correlation for significance of a linear relationship. With only 10 observations, the required correlation for significance is 0.6325, for 30 observations the required correlation for significance decreases to 0.3651 and at 100 observations the required level is only 0.2000.
Correlations may be helpful in visualizing the data, but are not appropriately used to "explain" a relationship between two variables. Perhaps no single statistic is more misused than the correlation coefficient. Citing correlations between health conditions and everything from place of residence to eye color have the effect of implying a cause and effect relationship. This simply cannot be accomplished with a correlation coefficient. The correlation coefficient is, of course, innocent of this misinterpretation. It is the duty of the analyst to use a statistic that is designed to test for cause and effect relationships and report only those results if they are intending to make such a claim. The problem is that passing this more rigorous test is difficult so lazy and/or unscrupulous "researchers" fall back on correlations when they cannot make their case legitimately.
-
Drawing a
Conclusion
There are two methods of making the decision concerning the hypothesis. The test statistic to test this hypothesis is:
-
What the Hypotheses Mean in Words

## Match 0.79 — LibreTexts: 10.3: Testing the Significance of the Correlation Coefficient
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Courses/Gettysburg_College/MGT_235%3A_Introductory_Business_Statistics_(2nd_edition)/10%3A_Linear_Regression_and_Correlation/10.03%3A_Testing_the_Significance_of_the_Correlation_Coefficient

10.3: Testing the Significance of the Correlation Coefficient
The correlation coefficient, \(r\), tells us about the strength and direction of the linear relationship between \(X\) and \(Y\).
The sample data are used to compute \(r\), the correlation coefficient for the sample. If we had data for the entire population, we could find the population correlation coefficient. But because we have only sample data, we cannot calculate the population correlation coefficient. The sample correlation coefficient, \(r\), is our estimate of the unknown population correlation coefficient.
- \(\rho\) = population correlation coefficient (unknown)
- \(r\) = sample correlation coefficient (known; calculated from sample data)
The hypothesis test lets us decide whether the value of the population correlation coefficient \(\rho\) is "close to zero" or "significantly different from zero". We decide this based on the sample correlation coefficient \(r\) and the sample size \(n\).
If the test concludes that the correlation coefficient is significantly different from zero, we say that the correlation coefficient is "significant."
- Conclusion: There is sufficient evidence to conclude that there is a significant linear relationship between variables \(X\) and \(Y\) because the correlation coefficient is significantly different from zero.
- What the conclusion means: There is a significant linear relationship between variables \(X\) and \(Y\). If the test concludes that the correlation coefficient is not significantly different from zero (it is close to zero), we say that correlation coefficient is "not significant".
Performing the Hypothesis Test
- Null Hypothesis: \(H_{0} : \rho=0\)
- Alternate Hypothesis: \(H_{a} : \rho \neq 0\)
What the Hypotheses Mean in Words:
- Null Hypothesis \(H_{0}\): The population correlation coefficient IS NOT significantly different from zero. There IS NOT a significant linear relationship (correlation) between \(X\) and \(Y\) in the population.
- Alternate Hypothesis \(H_{a}\): The population correlation coefficient is significantly different from zero. There is a significant linear relationship (correlation) between \(X\) and \(Y\) in the population.
Drawing a Conclusion There are two methods of making the decision concerning the hypothesis. The test statistic to test this hypothesis is:
\[t_{obs}=\frac{r-\rho}{\sqrt{\left(1-r^{2}\right) /(n-2)}}\nonumber\]
\[\textbf{OR}\nonumber\]
\[t_{obs}=\frac{(r-\rho)*\sqrt{n-2}}{\sqrt{1-r^{2}}}\nonumber\]
Where the second formula is an equivalent form of the test statistic, \(n\) is the sample size and the degrees of freedom are \(n-2\). This is a \(t\)-statistic and operates in the same way as other \(t\)-tests. Calculate the \(t\)-value and compare that with the critical value from the \(t\)-table at the appropriate degrees of freedom and the level of confidence you wish to maintain. If the calculated (observed) value is in the tail, then reject the null hypothesis that there is no linear relationship between these two independent random variables. If the calculated (observed) \(t\)-value is NOT in the tail, then we cannot reject the null hypothesis that there is no linear relationship between the two variables.
A quick shorthand way to test correlations is the relationship between the sample size and the correlation. If:
\[|r| \geq \frac{2}{\sqrt{n}}\nonumber\]
then this implies that the correlation between the two variables demonstrates that a linear relationship exists and is statistically significant at approximately the 0.05 level of significance. As the formula indicates, there is an inverse relationship between the sample size and the required correlation for significance of a linear relationship. With only 10 observations, the required correlation for significance is 0.6325, for 30 observations the required correlation for significance decreases to 0.3651 and at 100 observations the required level is only 0.2000.
Correlations may be helpful in visualizing the data, but are not appropriately used to "explain" a relationship between two variables. Perhaps no single statistic is more misused than the correlation coefficient. Citing correlations between health conditions and everything from place of residence to eye color have the effect of implying a cause and effect relationship. This simply cannot be accomplished with a correlation coefficient. The correlation coefficient is, of course, innocent of this misinterpretation. It is the duty of the analyst to use a statistic that is designed to test for cause and effect relationships and report only those results if they are intending to make such a claim. The problem is that passing this more rigorous test is difficult so lazy and/or unscrupulous "researchers" fall back on correlations when they cannot make their case legitimately.

## Match 0.79 — LibreTexts: 8.6: Medical Specialists, Diagnostic Testing, and Procedures Related to Pregnancy
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://med.libretexts.org/Bookshelves/Medicine/Medical_Terminology_2e_(OpenRN)/08%3A_Obstetrics_Terminology/8.06%3A_Medical_Specialists_Diagnostic_Testing_and_Procedures_Related_to_Pregnancy

8.6: Medical Specialists, Diagnostic Testing, and Procedures Related to Pregnancy
Medical Specialists
Obstetrics (ŏb-STE-triks) (OB) is a medical specialty dealing with pregnancy, childbirth, and postpartum, also known as puerperium (pū-ĕr-PĒ-rē-ŭm), the period from delivery until the reproductive organs return to normal (approximately six weeks).
An obstetrician (ob-stĕ-TRISH-ăn) is a physician who specializes in obstetrics (OB) and gynecology (GYN) and are commonly referred to as “OB/GYNs.”
Midwifery (mĭd-WIF-ĕr-ē) is the practice of assisting in childbirth. A midwife (MĬD-wīf) is an individual who practices midwifery. A c ertified nurse-midwife (SĔR-tĭ-fīd NŬRS mĭd-wīf) (CNM) is a type of advanced practice registered nurse who has completed advanced education and training. CNMs provide health care to women, including family planning, gynecological checkups, prenatal care, delivery of babies, and postpartum care.
A pediatrician (pēd-ē-ă-TRISH-ăn) is a doctor who focuses on the health of infants, children, and adolescents. Pediatric care starts at birth. Neonatologists (nē-ō-nă-TOL-ŏ-jĭsts) are physicians who specialize in the care of newborns. Newborns can present a unique set of health challenges that require special medical expertise, especially premature newborns and those with underdeveloped organs.
Diagnostic Testing
Amniocentesis
Amniocentesis (am-nē-ō-sen-TĒ-sĭs) is a procedure that removes a small amount of amniotic fluid from the uterus under ultrasound guidance. The fluid is tested for potential fetal abnormalities. See Figure 8.10 [1] for an illustration of amniocentesis.
Chorionic Villus Sampling
Chorionic villus sampling is performed to diagnose chromosome problems or other genetic diseases in a fetus by checking chorionic villi, the tiny finger-like growths found in the placenta. Chorionic villi contain the same chromosomes as the fetus, so this test can show if an extra chromosome, missing chromosomes, or damaged chromosomes are present that can cause serious health problems. [2]
Contraction Stress Test
A contraction stress test (kŏn-TRAK-shŏn STRĒS test) involves monitoring the baby’s heart rate while inducing contractions in the mother. This diagnostic test may be performed if there are abnormal results from a nonstress test. Fetal heart monitoring is used while oxytocin is administered to the mother, causing the uterus to contract. Every contraction means the baby gets less blood and oxygen for a short while. A contraction stress test shows how the baby’s heart rate reacts to the stress of contractions. If the baby’s heart rate slows down rather than speeds up after a contraction, the baby may have problems during labor. If the results are abnormal, delivery may be induced. [3] Induction (in-DUK-shŏn) is when a provider administers medicine or uses other methods to artificially start labor before it begins naturally.
Noninvasive Prenatal Testing
Noninvasive prenatal testing (nŏn-ĭn-VĀ-sĭv prē-NĀ-tăl TĔS-tĭng), sometimes called noninvasive prenatal screening, is a method of determining the risk that the fetus will be born with certain genetic abnormalities. This testing analyzes small fragments of DNA that are circulating in a pregnant woman’s blood. It is considered noninvasive because it requires drawing blood only from the pregnant woman and does not pose any risk to the fetus. [4]
Nonstress Test
A nonstress test (NŎN-strĕs tĕst) is a safe, noninvasive test that measures the heart rate of the fetus as it moves within the uterus. In most healthy babies, the fetal heart rate increases during their movement in the uterus. If nonstress test results show the fetal heart rate is not normal, it may mean that the baby is not getting enough oxygen. If this happens, additional testing may be performed, or delivery may be induced.
Pelvic Ultrasound
A pelvic ultrasound, also called pelvic sonography (PEL-vik sō-NOG-ră-fē), is the process of recording sound waves pertaining to the pelvis. It is performed during pregnancy to check the growth and wellness of the fetus and to estimate a due date. A prenatal ultrasound evaluation of fetal well-being is also referred to as a biophysical profile (BĪ-ō-FĬZ-ĭ-kăl PRO-fīl).
Procedures
Fetal Heart Monitoring
Fetal heart monitoring (FĒ-tăl HÄRT MON-ĭt-or-ing) refers to tracking the heart rate of the fetus. The most common form of monitoring is external electronic fetal monitoring. Sensors are strapped to the mother’s abdomen, and instruments record the baby’s heartbeat. If the mother is in labor, the contractions are also monitored to see how the baby is responding to the contractions. [5]
Internal monitoring uses an electrode attached to a wire that is placed directly on the baby’s scalp to monitor the heartbeat. The electrode is threaded through the cervix and into the uterus, where it is attached to the baby’s scalp. A small tube can also be inserted to measure contractions. The two devices can provide more accurate measurements of the baby’s heartbeat and the mother’s contractions. [6]
In Vitro Fertilization
In vitro fertilization (in VĪ-trō FĔR-tĭ-lĭ-ZĀ-shŏn) (IVF) is an assisted reproductive technology. There are many different indications for IVF. For example, a woman may produce normal eggs, but the eggs cannot reach the uterus because the uterine tubes are blocked or otherwise compromised. A man may have a low sperm count, low sperm motility, sperm with an unusually high percentage of morphological abnormalities, or sperm that are incapable of penetrating the zona pellucida of an egg. There are five basic steps of IVF [7] :
- Stimulation (STĬM-yū-LĀ-shŏn) (also called superovulation): Medicines, called fertility drugs, are given to the woman to boost egg production.
- Egg retrieval (Ĕg rĭ-TREE-vəl): A minor surgery, called follicular aspiration, is done to remove the eggs from the woman’s ovaries. The health care provider inserts a thin needle through the vagina into the ovary and into the follicles containing mature eggs. The needle is connected to a suction device, which pulls the eggs and fluid out of each follicle, one at a time. If a woman does not produce any eggs, donated eggs may be used.
- Insemination (in-sem-ĭ-NĀ-shŏn) and fertilization (fĕr-tĭ-lī-ZĀ-shŏn): Sperm is mixed with the best quality eggs, called insemination. The sperm most often enters (fertilizes) an egg a few hours after insemination. If the chance of fertilization is low, the sperm may be directly injected into the egg, called intracytoplasmic sperm injection.
- Embryo culture (ĔM-brē-ō Kŭl-chər): The retrieved egg is maintained and monitored under stable conditions promoting cell division until it is ready to be transferred into the uterus. The process usually takes 3-5 days.
- Embryo transfer (ĔM-brē-ō TRĂNS-fər): Embryos are placed into the woman’s uterus 3 to 5 days after egg retrieval and fertilization. The doctor inserts a thin tube containing the embryos into the vagina, through the cervix, and up into the uterus. If an embryo implants in the endometrium and grows, pregnancy results. More than one embryo may be placed into the uterus at the same time, which can lead to twins, triplets, or more. Unused embryos may be frozen and implanted or donated at a later date.
- “ Amniocentesis.png ” by BruceBlaus is licensed under CC BY-SA 4.0 ↵
- Medline Plus. (2021). Chorionic villus sampling (CVS) . https://medlineplus.gov/lab-tests/chorionic-villus-sampling-cvs/ ↵
- A.D.A.M. Medical Encyclopedia [Internet]. Atlanta (GA): A.D.A.M., Inc.; c1997-2023. Monitoring your baby before labor; [reviewed 2022, Apr 19; cited 2023, Oct 20]. https://medlineplus.gov/ency/patientinstructions/000485.htm ↵
- Medline Plus. (2021). What is noninvasive prenatal testing and what disorders can it screen for? https://medlineplus.gov/genetics/understanding/testing/nipt/ ↵
- Familydoctor.org. (2017, October 20). Monitoring baby’s heart rate during labor . American Academy of Family Physicians. https://familydoctor.org/monitoring-babys-heart-rate-labor/ ↵
- Familydoctor.org. (2017, October 20). Monitoring baby’s heart rate during labor . American Academy of Family Physicians. https://familydoctor.org/monitoring-babys-heart-rate-labor/ ↵
- A.D.A.M. Medical Encyclopedia [Internet]. Atlanta (GA): A.D.A.M., Inc.; c1997-2023. In vitro fertilization (IVF); [reviewed 2022, Jan 10; cited 2023, Oct 20]. https://medlineplus.gov/ency/article/007279.htm ↵
