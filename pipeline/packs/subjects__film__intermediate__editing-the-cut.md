# Source pack — subjects/film/intermediate/editing-the-cut
Lesson title: Editing: The Cut
Level: intermediate
Match confidence: 3.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.03 — LibreTexts: 5.1: Module 27 Editing Solid Models – Part 1
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Bookshelves/Drafting_and_Design_Technology/Introduction_to_Drafting_and_AutoCAD_3D_(Baumback)/05%3A_Part_6/5.01%3A_Module_27_Editing_Solid_Models__Part_1

5.1: Module 27 Editing Solid Models – Part 1
Module 27 Editing Solid Models – Part 1
Learning Outcomes
When you have completed this module, you will be able to:
- Describe how solid models are edited including the terms, body, face and edge.
- Apply the SOLIDEDIT command to edit faces of solid models.
Editing Solid Models
The SOLIDEDIT command is used to edit solid models. This powerful command has many options and is used to do most of the editing of existing solid models. When editing solids, you must be able to identify and select the body, faces and edges of the solid model.
Body
A body is the solid model itself. See Figure 27-1.
Face
A face is the planer or curved 3D surfaces of the solid model. See Figure 27-2.
Edge
An edge is the shared object between two faces or surfaces of the solid. See Figure 27-3. Editing edges will be covered in Module 23.
AutoCAD Command: SOLIDEDIT
The SOLIDEDIT command is used to edit solid objects.
Shortcut: none
WORK ALONG: Using the SOLIDEDIT Command
Step 1
Using the NEW command, start a new drawing using template: 3D Layout English .
Step 2
Save the drawing and name it: AutoCAD 3D Workalong 27-1 .
Step 3
Draw the plines on layer: Pline and the solid model on layer: Solid 6 .
Step 4
Draw a solid model of the object shown in the figures. (Figure Step 4A and 4B)
Step 5
If you are using toolbars, enable the display of the Solids Editing toolbar. If you are using ribbons, use the Home tab. (Figure Step 5)
Step 6
Set the view to SE Isometric, the current visual style to 3D Wireframe and the UCS in World. (Figure Step 6)
Step 7
Click the Extrude Faces icon and, as shown below, to extrude the face on the right. (Figure Step 7A, 7B, and 7C)
Command: SOLIDEDIT
Solids editing automatic checking: SOLIDCHECK=1
Enter a solids editing option [Face/Edge/Body/Undo/eXit] <eXit>: F
Enter a face editing option
[Extrude/Move/Rotate/Offset/Taper/Delete/Copy/coLor/Undo/eXit] <eXit>: E
Select faces or [Undo/Remove]: P1 2 faces found.
(Select the face. Notice it finds 2 faces.)
Select faces or [Undo/Remove/ALL]: R
(Remove one of the faces.)
Remove faces or [Undo/Add/ALL]: P2 2 faces found, 1 removed.
Remove faces or [Undo/Add/ALL]:
Specify height of extrusion or [Path]: 2
(Extrude the face 2 units in the positive direction.)
Specify angle of taper for extrusion <0>:
Solid validation started.
Solid validation completed.
Command:
Step 8
Click the Extrude Faces icon and complete the command, as shown below, to extrude the face to the bottom. (Figure Step 8A and 8B)
Command: SOLIDEDIT
Solids editing automatic checking: SOLIDCHECK=1
Enter a solids editing option [Face/Edge/Body/Undo/eXit] <eXit>: F
Enter a face editing option
[Extrude/Move/Rotate/Offset/Taper/Delete/Copy/coLor/mAterial/Undo/eXit] <eXit>: E
Select faces or [Undo/Remove]: P3 1 face found.
Select faces or [Undo/Remove/ALL]:
Specify height of extrusion or [Path]: -1
Specify angle of taper for extrusion <0>:
Solid validation started.
Solid validation completed.
Enter a face editing option
[Extrude/Move/Rotate/Offset/Taper/Delete/Copy/coLor/mAterial/Undo/eXit] <eXit>:
Command:
Step 9
Click the Move Faces icon and complete the command shown below to move the face on the top of the model higher. (Figure Step 9A, 9B, 9C, and 9D)
Command: SOLIDEDIT
Solids editing automatic checking: SOLIDCHECK=1
Enter a solids editing option [Face/Edge/Body/Undo/eXit] <eXit>: F
Enter a face editing option
[Extrude/Move/Rotate/Offset/Taper/Delete/Copy/coLor/Undo/eXit] <eXit>: M
Select faces or [Undo/Remove]: P5 2 faces found.
Select faces or [Undo/Remove/ALL]: R
Remove faces or [Undo/Add/ALL]: 2 faces found, 1 removed.
Remove faces or [Undo/Add/ALL]:
Specify a base point or displacement: 0,0,0
Specify a second point of displacement: @0,0,1
(Move the in the positive Z or up 1 unit.)
Solid validation started. Solid validation completed.

Select faces or [Undo/Remove/ALL]: R
Remove faces or [Undo/Add/ALL]: P7 2 faces found, 1 removed.
Remove faces or [Undo/Add/ALL]: A
(This time a face must be added in.)
Select faces or [Undo/Remove/ALL]: P8 2 faces found. Select faces or [Undo/Remove/ALL]: R
Remove faces or [Undo/Add/ALL]: P9 1 face found, 1 removed.
Remove faces or [Undo/Add/ALL]:
Specify the offset distance: 2
(Offset distance is 2 units.)
Solid validation started.
Solid validation completed.
Enter a face editing option
Command:
Step 11
Click the Delete Faces icon and complete the command shown below to delete a the hole in the model. (Figure Step 11A, 11B, and 11C)
Command: SOLIDEDIT
Solids editing automatic checking: SOLIDCHECK=1
Enter a solids editing option [Face/Edge/Body/Undo/eXit]
<eXit>: F
Enter a face editing option
[Extrude/Move/Rotate/Offset/Taper/Delete/Copy/coLor/Undo/ eXit] <eXit>: D
Select faces or [Undo/Remove]: P10 2 faces found.
Select faces or [Undo/Remove/ALL]: R
Remove faces or [Undo/Add/ALL]: P11 2 faces found, 1 removed.
(Remove the left face and keep the hole face.)
Remove faces or [Undo/Add/ALL]:
Solid validation started.
Solid validation completed.
Enter a face editing option
Command:
Step 12
Save and close the drawing.
Key Principles
Key Principles in Module 27
- When editing solids, you must be able to identify and select the body, faces and edges of the solid model.
- When editing solids, always use the Solids Editing toolbar instead of trying to enter the commands using another method.
- One of the trickiest parts of using the SOLIDEDIT command is selecting the solid faces or edges that you want to edit.
Lab Exercise 27-1
Time allowed: 30 minutes.
| Drawing Name | Template | Units |
|---|---|---|
| AutoCAD 3D Lab 27-1 | N/A | Inches |
Step 1
Open the drawing: AutoCAD 3D Lab 18-5 and save it with the name: AutoCAD 3D Lab 27-1 .
Step 2
Using the SOLIDEDIT command only, edit the solid to appear as shown in the figures. (Figure Step 2A, 2B, and 2C)
Lab Exercise 27-2
Time allowed: 30 minutes.
| Drawing Name | Template | Units |
|---|---|---|
| AutoCAD 3D Lab 27-2 | N/A | Inches |
Step 1
Open the drawing: AutoCAD 3D Lab 17-1 and save it with the name: AutoCAD 3D Lab 27-2
Step 2
Using the SOLIDEDIT command only, edit the solid to appear as in the figures. (Figure Step 2A, 2B, and 2C)

## Match 3.03 — LibreTexts: 8.8: Editing Your Paper
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://med.libretexts.org/Bookshelves/Nursing/The_Scholarship_of_Writing_in_Nursing_Education_(Lapum_et_al.)/08%3A_Revising_and_Editing_a_Paper/8.08%3A_Editing_Your_Paper

8.8: Editing Your Paper
The next step after revising the content is editing. When you edit, examine the surface features of your text: spelling, grammar, spacing, and punctuation . It takes time, so be sure to budget time into the writing process to complete additional edits after revising. It is also very easy to read past a mistake, so set your paper aside for at least a few hours, if not a day or more, so your mind can rest. If you need additional proofreading help, ask a reliable friend, classmate, or peer tutor to make a final pass on your paper to look for anything you missed.
Here are a few tips about readers:
- They don’t notice correct spelling, but they do notice misspellings. They won’t cheer when you use there, their, and they’re correctly, but they will notice when you do not.
- They look past your sentences to get to your ideas – unless the sentences are awkward, poorly constructed, and frustrating to read.
- They notice when every sentence has the same rhythm as every other sentence, with no variety.
- The accumulation of errors distracts the reader from your argument and suggests that you didn’t put enough care into your writing.
Student Tip
Spell and Grammar Check
Spell and grammar checks can be helpful, but you must review them carefully. Your computer may be programmed to identify problem words, but it is not always correct, so don’t rely on it. A computer cannot consider context and meaning. For example, if the spellchecker identifies a word that is misspelled and provides alternatives, you might end up choosing a word that you never intended, even though it is spelled correctly. This can change the meaning of your sentence. Spellcheck can also miss misspelled words that are correct spellings of a different word: e.g., form versus from. Spellcheck may also make grammatical suggestions such as semi-colons and hyphens that do not necessarily fit your sentence structure.
Attribution statement
Remixed with our own original content and adapted, with editorial changes, from:
Writing for Success 1st Canadian Edition by Tara Horkoff is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License , except where otherwise noted. Download for free at: opentextbc.ca/writingforsuccess/

## Match 3.02 — LibreTexts: 8.9: Editing for Clarity and Conciseness
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://med.libretexts.org/Bookshelves/Nursing/The_Scholarship_of_Writing_in_Nursing_Education_(Lapum_et_al.)/08%3A_Revising_and_Editing_a_Paper/8.09%3A_Editing_for_Clarity_and_Conciseness

8.9: Editing for Clarity and Conciseness
Some writers are very methodical and painstaking when they write a first draft. Others unleash a lot of words and ideas to get out everything they want to say. Do either of these methods match your style? Or is your composing style somewhere in between? Regardless of the author, the first draft of almost every piece of writing can be made more clear and concise.
To be concise, you should edit your writing for wordiness. Eliminating wordiness make your work easier to read because the ideas are clear, direct, and straightforward.
Click on the items below to see how the wordiness can be revised.
The original version of this chapter contained H5P content. You may want to remove or replace this element.
Here are some tips for choosing specific and appropriate words to ensure your writing is clear and concise:
- Avoid slang. Use scholarly language to replace informal language.
- Avoid overly casual language. Write about “men and women” rather than “guys and girls” unless you are trying to create a specific effect. A formal tone calls for formal language. However, more gender-inclusive language would be “persons of all genders.”’
- Avoid contractions. Use “do not” instead of “don’t” – contractions are considered casual speech.
- Avoid clichés. Overused expressions like “face the music,” and “better late than never” are empty of meaning and are unlikely to appeal to your audience.
- Be careful when you use words that sound alike but have different meanings. Some examples are allusion/ illusion; complement/compliment; council/counsel; concurrent/consecutive; founder/flounder; and historic/historical. When in doubt, check a dictionary.
- Choose words that have the connotations you want. “Proud” has positive connotations, while “arrogant” and “conceited” have negative connotations.
- Use specific words rather than overly general words. Find synonyms for vague words like thing, people, good, and interesting or add specific details to make your exact meaning clear.
Student Tip
Red Herrings
Red herrings (see Figure 8.3 ) are sentences or statements that distract the reader from your main idea or thesis statement. Pay close attention when revising to notice any red herrings. For example, avoid writing about the benefits of mathematic skills in adolescents if your thesis is: Adolescents who are captivated by the sexual images on MTV are conditioned to believe that a person’s worth depends on their sexuality, a feeling that harms their self-esteem and behaviour.
Figure 8.3: Watch out for red herrings
Attribution statement
Remixed with our own original content and adapted, with editorial changes, from:
Writing for Success 1st Canadian Edition by Tara Horkoff is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License , except where otherwise noted. Download for free at: opentextbc.ca/writingforsuccess/
