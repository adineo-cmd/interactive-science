# Source pack — subjects/computer-science/advanced/cybersecurity-threats-and-defences
Lesson title: Cybersecurity: Threats & Defences
Level: advanced
Match confidence: 1.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.05 — LibreTexts: 13.5.2: Digital Threats to Social Movements
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Courses/Collin_College/Introduction_to_Sociology/13%3A_Social_Change/13.05%3A_Digital_Suppression_of_Social_Movements_(in_the_US)/13.5.02%3A_Digital_Threats_to_Social_Movements

13.5.2: Digital Threats to Social Movements
-
- Last updated
- Save as PDF
- Anonymous
- LibreTexts
What You’ll Learn
- What threat modeling is
- Who is engaged in surveillance and the strategies they use
- Examples of tactics and programs used in surveillance
Social movements challenging powerful individuals, organizations, and social structures face a broad range of surveillance risks. Specific threats vary widely in technical sophistication, likelihood, and potential for harm. Threat modeling is a process whereby an organization or individual considers their range of adversaries, estimates the likelihood of their various data and devices falling victim to attack, and finally considers the damage done if attacks were to succeed. (And then they work to protect the data that is most at risk and that would be the most damaging to lose or have accessed.)
We think about surveillance in the following order to inform how to protect oneself:
- Who is your adversary ? Is it a neighborhood Nazi who is taking revenge on you for your Black Lives Matter lawn sign? Is it an oil corporation that is fighting your antipipeline activism? Is it the US government trying to prevent you from whistleblowing? By understanding who your adversary is, you can surmise their resources and capabilities.
- Is your adversary going after you in particular, are they trying to discover who you are, or are they collecting a lot of information in the hopes of getting your information? What surveillance strategy are they likely to employ? This will help you understand what type of data and where your data may be at risk.
- What particular surveillance tactics will your adversary employ to get that desired data? This will help you understand how to protect that data.
We examine surveillance risks starting with the adversary because it is strategic to do so. No one can achieve perfect digital security, but one can be smart about where to spend one’s effort in protecting oneself against surveillance. In an actual threat-modeling discussion within an organization or social movement, who potential adversaries are is often more readily apparent than how such adversaries would carry out attacks. Who the adversary is then informs the range of techniques available to that adversary (depending on their available resources and legal authorities) and, in turn, what protective behaviors and technologies the organization can employ.
Surveillance Adversaries
We generally think of adversaries in terms of what resources they have available to them. For the purposes of this book, we will limit ourselves to three adversary categories:
Nation-states have access to the most resources in a way that may make it seem like their surveillance capabilities are limitless. Even so, they are unlikely to be able to break strong encryptions. Here, we think of the National Security Agency (NSA) as the entity with access to the most sophisticated surveillance capabilities. The disclosures by Edward Snowden in 2013 give the most comprehensive window into nation-state-level capabilities and are searchable in the Snowden Surveillance Archive.
Large corporations and local law enforcement are often heavily resourced and share information with each other but don’t necessarily have access to the capabilities of nation-states. However, the use of technology to aid in surveillance is widespread among law enforcement agencies in the US, as illustrated below in this screenshot from Electronic Frontier Foundation’s Atlas of Surveillance.
Individuals have the least resources but might know you personally and so be able to more effectively use social engineering to obtain your data.
Note that techniques available to lower-resourced adversaries are also available to higher-resourced adversaries. As an example, corporations and law enforcement employ informants and infiltrators, who may be individuals who know you personally. Also, while more sophisticated surveillance capabilities are not usually available to lower-resourced adversaries, it is not always the case: police departments in large cities may have access to nation-state-level resources (e.g., through data sharing that is facilitated by fusion centers), or a particularly skilled neighborhood Nazi may possess advanced hacking skills that enable some corporate-level attacks.
So while these categories are not sharply defined, they can act as a starting point for understanding the risks and focusing on your adversaries’ most likely strategies and your most likely weaknesses.
Surveillance Strategies
There are two broad strategies of surveillance: mass-surveillance and targeted surveillance.
Mass surveillance collects information about whole populations. This can be done with the purpose of trying to better understand that population. For example, the collection and analysis of health-related data can help identify and monitor emerging outbreaks of illnesses. Mass surveillance may also be used as a strategy to identify individuals of interest within the surveilled population. For example, video feeds from security cameras can be used to identify those who engaged in property damage. Or mass surveillance may garner information about a particular individual. For example, information collected from the mass deployment of license-plate cameras can be used to track the movements of that particular individual.
Targeted surveillance only collects information about an individual or a small group of individuals. For example, wiretapping intercepts the communications of a particular individual. Targeted surveillance allows for the existence of prior suspicion and can (conceivably) be controlled—for example, law enforcement obtaining a warrant based on probable cause before intercepting someone’s mail.
Historically, there was a clearer divide between targeted and mass surveillance. However, in the digital age, many tactics of targeted surveillance can be deployed on a mass scale, as we will discuss further. In addition to this classic division of surveillance strategies, we draw attention to a bigger strategy that is unique to the digital age.
Collect-it-all may simply be viewed as mass surveillance on steroids but goes far beyond what may have historically been viewed as mass surveillance. Where mass surveillance may encompass things like security cameras, the monitoring of bank transactions, and the scanning of emails, collect-it-all aims to vacuum up any information that is digitized. Collect-it-all goes further: for any information that isn’t online or available (e.g., video from truly closed-circuit security cameras), it digitizes it and then collects it. Collect-it-all is infamously attributed to General Keith Alexander, former director of the NSA, whose mass-surveillance strategies were born in post-9/11 Iraq and were described as follows: “Rather than look for a single needle in the haystack, his approach was, ‘Let’s collect the whole haystack. Collect it all, tag it, store it…  This is likely the inspiration for many of the NSA programs that were uncovered by Edward Snowden that we highlight below.
Different adversaries tend to deploy different surveillance strategies, or rather, lower-resourced adversaries tend to be limited in their strategies, as depicted:
Surveillance Tactics
To go over all the surveillance tactics that are available to adversaries at all levels would fill an encyclopedia. Here we illustrate a few examples of surveillance programs and tactics that support the surveillance strategies above. We illustrate these programs (below) according to the minimum level of sophistication required to use the tactic and the number of people whose information would be collected via these means.
Mass Interception and Collection of Data
We start with what most people probably think of when they think of mass surveillance: the interception and possible recording of vast amounts of communications. Many mass interception programs were uncovered as part of Edward Snowden’s disclosures in 2013. STORMBREW , FAIRVIEW , and BLARNEY are three such programs through which the NSA collects data in transit by partnering with telecommunications companies and getting access to data passing through submarine data cables. This allows for the collection of any unencrypted content and all associated metadata while it is in transit from origin to destination. However, these programs cannot see content that is typically encrypted in transit, such as email or files in cloud storage. The PRISM program is a partnership of the NSA with various internet companies (such as Google, Microsoft, and Facebook, as illustrated below) to allow NSA access to data held on company servers. That is, if the information was encrypted in transit and so not collectible via STORMBREW, FAIRVIEW, and BLARNEY, then the NSA can get it via PRISM—unless the information is encrypted on the company servers with a key that the user controls.
Aggregating and Analyzing Data
Once you have a whole lot of surveillance data, what do you do with it? Surely the man will not be able to find my tiny little needle in that massive haystack. This is where data mining, from basic search to (creepy) predictive machine-learning models, comes in to make vast amounts of mass-surveillance data (including from disparate sources) useful to powerful adversaries.
The most basic functionality is the ability to search—that is, given a large amount of data, retrieving the data of interest, such as that related to a particular person. XKEYSCORE acts as a Google-type search for the NSA’s mass-surveillance data stores. While the functionality is basic, the sheer amount of information it has access to (including that from the NSA programs highlighted above) places XKEYSCORE (and any related program) as accessible to only the most powerful adversary.
On the other hand, Dataminr searches publicly available data (such as social media posts) to uncover and provide details of emerging crises (such as COVID-19 updates and George Floyd protests) to their customers, which include newsrooms, police departments, and governments, through both automated (software) and manual (human analysis) means. Dataminr and other social media–monitoring platforms, of which there are dozens if not hundreds, have come under fire for their surveillance of First Amendment–protected speech, most notably of the Movement for Black Lives. In several instances, Twitter and Facebook cut off social media–monitoring companies’ easy access to their data after public outcry over misuse.
Going further, Palantir is one of many policing platforms that supposedly predict where policing is needed, be that a street intersection, a neighborhood, or an individual.  Predictive policing platforms use current police data as the starting point and tend to send police to locations that police have been in the past. However, communities of color and impoverished neighborhoods are notably overpoliced, so predictive models will simply send police to these areas again, whether or not that is where crimes are being committed.
Going further still, EMBERS (Early Model Based Event Recognition Using Surrogates) has been used since 2012 to predict “civil unrest events such as protests, strikes, and ‘occupy’ events” in “multiple regions of the world” by “detect[ing] ongoing organizational activity and generat[ing] warnings accordingly.” The warnings are entirely automatic and can predict “the when of the protest as well as where of the protest (down to a city level granularity)” with 9.76 days of lead time on average. It relies entirely on publicly available data, such as social media posts, news stories, food prices, and currency exchange rates.
Targeted Collection of Data
Another surveillance tactic that comes to mind is that of the wiretap. However, the modern equivalent is a lot easier to enable than the physical wire installed on a communication cable, from which wiretap gets its name. One modern version is the cell site simulator ( CSS )

## Match 1.03 — LibreTexts: 1.21: Anticipating anthrax and other bioterrorism threats
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://med.libretexts.org/Bookshelves/Pharmacology_and_Neuroscience/Public_Health_in_Pharmacy_Practice_2e_-_A_Casebook_(Covvey_Arya_and_Mager)/01%3A_Chapters/1.21%3A_Anticipating_anthrax_and_other_bioterrorism_threats

1.21: Anticipating anthrax and other bioterrorism threats
At the end of this case, students will be able to:
- Identify the clinical criteria for an inhalation anthrax diagnosis
- Recommend an appropriate medication for post-exposure prophylaxis of anthrax
- Describe the role of a pharmacist during a bioterrorist attack
Introduction
Since the terrorist attacks of September 11, 2001, the US has been on high alert. 1-3 The anthrax exposures that followed shortly thereafter amplified the public cognizance that biological weapons remain a potential threat associated with terrorism. 1,3 Bioterrorism, the use of biological agents as a method of terrorism, may include agents such as anthrax, plague, smallpox, viral hemorrhagic fevers, or non-replicating agents such as toxins produced by living organisms. 1 A likely scenario for a biologic attack is via the dispersal of a pathogen in a densely populated area. 1 For this reason, it is imperative that health systems develop a disaster management team that they can quickly deploy in the event of a mass casualty event.
The role of the pharmacist in disaster management was first described in the 1960s. 2 Pharmacists were acknowledged as medication experts, capable of assisting in the emergent treatment of patients, educating the public, and developing and coordinating emergency preparedness measures. 2 In 1966, APhA advocated for the development of a national stockpile of medications and for disaster management plans to include plans for the preparation and mobilization of pharmacy activities throughout all phases of public health emergencies. 2 It was not until after the 2001 attacks that APhA released formal guidelines to address pharmacist involvement in bioterrorism preparedness planning.
These guidelines called for pharmacies to develop their own disaster management plans and to identify team members who should deploy in the event of a public health emergency. Furthermore, they emphasized the need for pharmacists to stay up to date on these procedures. 2 The following year, ASHP’s statement describing health system pharmacists’ role in counterterrorism measures emphasized that pharmacists are capable of not only medication dispensation but making therapy recommendations as well. 4 The guidelines stated that as medication experts, pharmacists can help optimize therapy as well as limit the overuse of antibiotics in a setting when the demand often exceeds the available supply. 4 During the 2001 anthrax exposures, the prescribing rate for ciprofloxacin and doxycycline far exceeded recommendations of the CDC. 5 In a bioterrorism event, delayed treatment, selection of incorrect antibiotics, and the overuse of antibiotics can increase resistance. 3 This further highlights the importance of incorporating pharmacists as members of disaster response teams.
The role of the pharmacist in disaster preparedness has further evolved since these early recommendations. 2 ,5 Pharmacists have also been incorporated into teams intended to protect their fellow healthcare workers at the front lines of mass casualty events. For example, at Maimonides Medical Center, pharmacists are members of both the hospital’s incident command center and the pharmacy emergency response team (PERT). The PERT was developed with the goal of protecting the health of hospital staff and preventing the contamination of the healthcare facility. 2 Similarly, pharmacists at Montefiore Medical Center participated in a point-of-distribution exercise in conjunction with the New York City Department of Health and Mental Hygiene to simulate the mass prophylaxis of healthcare workers in the event of a public health emergency. 5 This exercise demonstrated that allowing pharmacists to immunize in a simulated public health emergency afforded approximately 12,000 healthcare workers the opportunity to receive prophylaxis within a 48 hour period. 5 Pharmacists have the potential to reduce the financial impact of bioterrorist attacks on both the healthcare facility and the surrounding community. 5
Case
You are a pharmacist in an urban emergency department (ED).
CC: “I feel like I can’t breathe.”
 For the past 24 to 48 hours, PD’s wife states he had a fever of 102.5 0 F, non-productive cough, shortness of breath, chest pain, and fatigue. His wife denies other respiratory symptoms. He has no other neurological symptoms. He first started to experience respiratory symptoms about two days after attending a professional hockey game.
PMI: Seasonal allergies (spring)
SH: PD works full time at a mail distribution center, is married with one child (five years old), and lives in an urban city with medical insurance and full access to healthcare services. He reports drinking one to two alcoholic drinks per week (beer/wine with dinner) and two cups of coffee per day, but denies any tobacco and illicit drug use.
Allergies: NKDA
Medications:
- Loratadine 10 mg by mouth daily PRN seasonal allergies
Vaccinations:
- Wife believes he received all routine childhood vaccines, Tdap booster 2 years ago, and is up to date on his annual flu vaccine (receives flu vaccine every year)
ROS:
- General: Well-nourished male in apparent respiratory distress
- HEENT: WNL
- Chest: Rhonchi present
- CV: No murmurs, gallops or rubs
- Abdomen: NT/ND
- Skin: WNL
VS:
- BP 112/60 mmHg
- RR 22 / min
- HR 110 bpm
- Temperature 102.5 0 F
Labs and Imaging:
- Chest x-ray: pleural effusion
- Chest CT: mediastinal widening, pleural effusions with pericardial effusion
- Lumbar puncture: negative
- Gram stain (sputum): gram-positive rods, square-ended, in pairs
- Sputum specimen sent to a Laboratory Response Network (LRN)
Additional context: Over the next several days, there are increasing numbers of patients complaining of similar symptoms seen at other hospitals throughout the area. The ED has reported ten other admissions with similar symptoms. PD sputum sample came back as culture confirmed detection of B. anthracis by LRN-validated polymerase chain reaction. The state department of public health has identified several other cases in two other hospitals in the state. The Incident Command Center is activated and the state requests Strategic National Stockpile (SNS) activation for mass prophylaxis.
Case Questions
- During public health outbreaks, epidemiologists must have a working case definition to identify probable and confirmed cases. What clinical signs and laboratory criteria confirm a diagnosis of inhalation anthrax?
- Which antibiotics are approved for post-exposure prophylaxis for those exposed to B. anthracis ?
- What type of inventory can the SNS supply? How long will take from the initial notification to when points of distribution (PODs) will receive SNS assets?
- What methods are used to educate the public? Who can dispense these medications?
- Who can dispense post-exposure prophylaxis antibiotics?
- What are the considerations for pediatric dispensing?
Author Commentary
Pharmacists remain the most accessible healthcare member in the community. As medication experts, pharmacists are well-positioned to respond to bioterrorism threats. This role has evolved through the decades from public education and medication dispensing to formal training of pharmacists as volunteers, such as members of the Medical Reserve Corps. Following the September 11, 2001, terrorist attacks, thousands of ciprofloxacin and other antimicrobials were prescribed to postal workers, public health officials, and congressional staff members for potential anthrax exposure. 6 Furthermore, the public was needlessly ordering ciprofloxacin from the internet and stockpiling it for future use without fully understanding the rare but serious adverse effects from unnecessary antibiotic exposure. This prompted the FDA to issue warnings to online vendors to prevent illicit drug sales. 7
This scenario applies to bioterrorism threats beyond anthrax. Pharmacists can assist public health organizations and responders by administering vaccines, dispensing emergency medications on a mass scale and in a timely manner, providing emergency refills of chronic medications, counseling patients on appropriate antibiotic use and adverse effects, establishing community pharmacies as a point of dispensing (POD), and ensuring adequate medication supplies are available for the response.
Patient Approaches and Opportunities
The International Federation of Red Cross and Red Crescent Societies define disaster as “ a sudden, calamitous event that seriously disrupts the functioning of a community or society, causing human, material, and economic or environmental loses that exceed the community’s or society’s ability to cope using its own resources .” 8 Community resilience is the ability of a community to effectively utilize its own resources to respond to and recover from such a disaster. 9 Pharmacists are essential in community resilience, and the degree to which pharmacists are prepared for a bioterror or pandemic event may have a significant impact on a community’s ability to respond and recover.
Patients may develop strong, trusting relationships with their pharmacists over a lifetime and may be more willing to share concerns and seek information from, or believe information provided by their pharmacists than from news outlets and public health agencies. In this way, pharmacists may mitigate community panic that can lead to drug hoarding, inappropriate medication use and abuse, and dissemination of inappropriate or inaccurate information. Pharmacists are also essential public health partners in infectious disease surveillance. Because social, economic, and cultural factors influence patients’ health-seeking behaviors, in communities where patients are less likely to seek care from a primary care provider, pharmacists may be the first health care practitioners to recognize the emergence of pandemic disease.
Overarching strategies for managing a bioterrorist attack can be applied to the management of pandemic influenza or other emerging, highly contagious, high mortality infectious disease. During a declared disaster or public health emergency such as a bioterror attack or pandemic event, a temporary, legal change may be made to a state’s pharmacy practice act. A state, county, or community-wide standing-order or collaborative practice agreement may be prepared expanding the pharmacist’s scope of practice. This can include diagnosis, assessment, and prescribing of medications specific to the bioterror or pandemic event. Such methods may allow pharmacists to immunize pediatric patients when the health-care system is strained.
Community pharmacies can develop formal, working-relationships with public health agencies before disaster strikes and may develop a memorandum of understanding (MOU), a formal, written agreement that defines the roles of all parties in advance. The Association of State and Territorial Health Officials (ASTHO) has partnered with the National Association of Chain Drug Stores (NACDS), the National Alliance of State Pharmacy Associations (NASPA), the CDC, and APhA to develop a toolkit. This toolkit will help public health agencies and community pharmacies develop a MOU that could “ leverage all potential partners’ strengths and promote synergies that can be useful for additional services, beyond immunizations .” 10 An MOU will allow pharmacies to coordinate and collaborate with public health agencies by becoming the POD for their neighborhood. In turn, community pharmacies benefit by receiving early allocation of federal vaccines and antibiotic supplies as needed.
Community pharmacies need to have a plan in place should disaster strike. To support public health, during a bioterror or pandemic event, community pharmacies should consider extending working hours and employing temporary pharmacies in quarantine or refugee areas.
Related chapters of interest:
- When disaster strikes: managing chaos and instilling lessons for future events
- HIV and hepatitis C co-infectio

## Match 1.02 — LibreTexts: 3.8: Threats and Opportunities in the Global Marketplace
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Courses/Coastline_College/BUS_C100%3A_Introduction_to_Business_(White)/03%3A_Competing_in_the_Global_Marketplace/3.08%3A_Threats_and_Opportunities_in_the_Global_Marketplace

3.8: Threats and Opportunities in the Global Marketplace
-
- Last updated
- Save as PDF
7. What threats and opportunities exist in the global marketplace?
To be successful in a foreign market, companies must fully understand the foreign environment in which they plan to operate. Politics, cultural differences, and the economic environment can represent both opportunities and pitfalls in the global marketplace.
Political Considerations
We have already discussed how tariffs, exchange controls, and other governmental actions threaten foreign producers. The political structure of a country may also jeopardize a foreign producer’s success in international trade.
Intense nationalism, for example, can lead to difficulties. Nationalism is the sense of national consciousness that boosts the culture and interests of one country over those of all other countries. Strongly nationalistic countries, such as Iran and New Guinea, often discourage investment by foreign companies. In other, less radical forms of nationalism, the government may take actions to hinder foreign operations. France, for example, requires pop music stations to play at least 40 percent of their songs in French. This law was enacted because the French love American rock and roll. Without airtime, American music sales suffer. In another example of nationalism, U.S.-based PPG made an unsolicited bid to acquire Netherlands-based AzkoNobel NV. There was a chorus of opposition from Dutch politicians to the idea of a foreign takeover of AzkoNobel, the Dutch paint manufacturer. The government warned that it would move to defend AzkoNobel from a hostile takeover attempt. AzkoNobel played up the sentiment, tweeting about its rejection of the hostile takeover with the hashtag #DutchPride. 37
In a hostile climate, a government may expropriate a foreign company’s assets, taking ownership and compensating the former owners. Even worse is confiscation, when the owner receives no compensation. This happened during rebellions in several African nations during the 1990s and 2000s.
Cultural Differences
Central to any society is the common set of values shared by its citizens that determine what is socially acceptable. Culture underlies the family, educational system, religion, and social class system. The network of social organizations generates overlapping roles and status positions. These values and roles have a tremendous effect on people’s preferences and thus on marketers’ options. For example, in China Walmart holds live fishing contests on the premises, and in South Korea the company hosts a food competition with variations on a popular Korean dish, kimchee.
Language is another important aspect of culture. Marketers must take care in selecting product names and translating slogans and promotional messages so as not to convey the wrong meaning. For example, Mitsubishi Motors had to rename its Pajero model in Spanish-speaking countries because the term refers to a sexual activity. Toyota Motor’s MR2 model dropped the 2 in France because the combination sounds like a French swear word. The literal translation of Coca-Cola in Chinese characters means “bite the wax tadpole.”
Each country has its own customs and traditions that determine business practices and influence negotiations with foreign customers. For example, attempting to do business in Western Europe during the first two weeks in August is virtually impossible. Businesses close, and everyone goes on vacation at the same time. In many countries, personal relationships are more important than financial considerations. For instance, skipping social engagements in Mexico may lead to lost sales. Negotiations in Japan often include long evenings of dining, drinking, and entertaining; only after a close personal relationship has been formed do business negotiations begin. Table 3.1 presents some cultural dos and don’ts.
| DO: | DON’T: |
|---|---|
|
|
Economic Environment
The level of economic development varies considerably, ranging from countries where everyday survival is a struggle, such as Sudan and Eritrea, to countries that are highly developed, such as Switzerland and Japan. In general, complex, sophisticated industries are found in developed countries, and more basic industries are found in less developed nations. Average family incomes are higher in the more developed countries than in the least-developed markets. Larger incomes mean greater purchasing power and demand, not only for consumer goods and services but also for the machinery and workers required to produce consumer goods. Table 3.2 provides a glimpse of global wealth.
Business opportunities are usually better in countries that have an economic infrastructure in place. Infrastructure is the basic institutions and public facilities upon which an economy’s development depends. When we think about how our own economy works, we tend to take our infrastructure for granted. It includes the money and banking system that provide the major investment loans to our nation’s businesses; the educational system that turns out the incredible varieties of skills and basic research that actually run our nation’s production lines; the extensive transportation and communications systems—interstate highways, railroads, airports, canals, telephones, internet sites, postal systems, and television stations—that link almost every piece of our geography into one market; the energy system that powers our factories; and, of course, the market system itself, which brings our nation’s goods and services into our homes and businesses.
| The Top 20 | Gross National Income Per Capita* US$ |
|---|---|
| * Gross National Income is the value of the final goods and services produced by a country (Gross Domestic Product) together with its income received from other countries (such as interest and dividends) less similar payments made to other countries. | |
| Final goods are the goods ultimately consumed rather than used in the production of another good. For example, a car sold to a consumer is a final good; the components, such as tires sold to the car manufacturer, are not. They are intermediate goods used to make the final good. The same tires, if sold to a consumer, would be a final good. | |
| Sources: Some data refers to IMF staff estimates and some are actual figures for the year 2017, made on April 12, 2017. Adapted from the World Economic Outlook Database—April 2017, International Monetary Fund, accessed on April 18, 2017. | |
| Luxembourg | 103,199 |
| Switzerland | 79,243 |
| Norway | 70,392 |
| Ireland | 62,562 |
| Qatar | 60,787 |
| Iceland | 59,629 |
| United States | 57,436 |
| Denmark | 53,744 |
| Singapore | 52,961 |
| Australia | 51,850 |
| Sweden | 51,165 |
| San Marino | 46,447 |
| Netherlands | 45,283 |
| Austria | 44,498 |
| Finland | 43,169 |
| Canada | 42,210 |
| Germany | 41,902 |
| Belgium | 41,283 |
| United Kingdom | 40,096 |
| Japan | 38,912 |
| The Bottom Five | |
| Madagascar | 391 |
| Central African Republic | 364 |
| Burundi | 325 |
| Malawi | 295 |
| South Sudan | 233 |
CONCEPT CHECK
- Explain how political factors can affect international trade.
- Describe several cultural factors that a company involved in international trade should consider.
- How can economic conditions affect trade op
