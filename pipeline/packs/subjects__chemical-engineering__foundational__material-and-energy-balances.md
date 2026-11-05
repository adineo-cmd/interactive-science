# Source pack — subjects/chemical-engineering/foundational/material-and-energy-balances
Lesson title: Material and Energy Balances
Level: foundational
Match confidence: 1.71

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.71 — LibreTexts: 5.2: Building Design for Energy Efficient Livestock Housing
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://eng.libretexts.org/Bookshelves/Biological_Engineering/Introduction_to_Biosystems_Engineering_(Holden_et_al.)/05%3A_Plant_Animal_and_Facility_Systems/5.02%3A_Building_Design_for_Energy_Efficient_Livestock_Housing

5.2: Building Design for Energy Efficient Livestock Housing
Andrea Costantino
TEBE Research Group
Department of Energy
Politecnico di Torino
Torino, Italy
and
Institute of Animal Science and Technology
Universitat Politècnica de València
València, Spain
Enrico Fabrizio
TEBE Research Group
Department of Energy
Politecnico di Torino
Torino, Italy
| Key Terms |
| Energy balance | Supplemental heating | Climate control |
| Mass balance | Heat recovery | Ventilation |
| Energy management | Cooling systems |
Variables
Introduction
Energy usage on farms is considered direct when used to operate machinery and climate control systems or indirect when is used to manufacture feed and agro-chemicals. Direct on-farm energy consumption was estimated to be 6 EJ yr −1 , representing about 1.2% of total world energy consumption (OECD, 2008). If indirect energy is included, total farm energy consumption could be as much as 15 EJ yr −1 , representing about 3.1% of global energy consumption. Housed livestock require adequate indoor climate conditions to maximize both production and welfare, particularly avoiding thermal stress. The task of the engineer is to improve the energy use efficiency of livestock housing and to minimize energy consumption. This can be achieved by improving the energy performance of the equipment used for climate control and the design of the building.
The focus of this chapter is on building design for efficient energy management in livestock housing. Improving building design requires understanding the mass and energy balance of the system to specify materials, dimensions, and equipment needed to maintain safe operating conditions. The importance of understanding the energy needs of buildings is illustrated by the report of St-Pierre et al. (2003), who estimated the economic losses by the dairy industry in the U.S. at $1.69 to $2.36 billion annually due to heat stress. Understanding and being able to use fundamental concepts for animal housing design provides the foundation for desirable welfare and more efficient production-centric animal housing.
Outcomes
After reading this chapter, you should be able to:
- • Describe the energy needs for livestock housing
- • Explain the energy management requirements of a livestock house
- • Describe the main climate control systems used for livestock housing and the features that affect the energy management
- • Calculate energy balances for livestock houses
Concepts
Energy and Mass Balance of a Livestock House
Thermodynamically, a livestock house is an open system that exchanges energy and mass (such as air, moisture, and contaminants) between the indoor and outdoor environments and the animals that occupy the internal volume (the enclosure). The law of conservation of energy and mass is the basic principle for the mass balance. The building walls, floor, and roof represent the control surfaces and enclose the control volume of the thermodynamic system represented by the livestock house and its internal surfaces, such as animals, interior walls, and equipment. Energy and mass balance equations allow the analysis of the thermal behavior of a livestock house, but calculating these balances is challenging because many factors affect the thermal behavior of these buildings. It is essential to understand which terms to consider, and what to assume as negligible.
Energy Balance
Sensible heat is the amount of heat exchanged by a body and the surrounding thermodynamic system that involves a temperature change. Latent heat is the heat absorbed or released by a substance during a phase change without a change in temperature. These two forms of heat can be illustrated using an example of heating a pot of water on a stove. Initially, the water is at room temperature (say, 25°C), and as the water is heated, its temperature increases. The heat causing the temperature increase is sensible heat and for water is equal to 4,186 kJ kg −1 K −1 . When the water temperature reaches 100°C (boiling point of water at atmospheric pressure), the water changes phase from liquid to gas (steam). The heat provided during the phase change breaks the molecular bonds of the liquid water to transition to the gas phase, but the temperature does not change. The heat supplied to effect phase change is latent heat. The latent heat of vaporization for a unit of mass of water is 2,272 kJ kg −1 at 100°C and atmospheric pressure.
The energy balance of a livestock house, considering only the sensible heat, can be written as follows (Panagakis and Axaopoulos, 2008):
\[ \phi_{a}+\phi_{tr}+\phi_{sol}+\phi_{f}+\phi_{v}+\phi_{m}+(\gamma_{fog}\cdot \phi_{H})=\sum^{n}_{k=1}(M_{el,k}\cdot C_{el,k})\cdot \frac{dT_{air,i}}{dt} \]
where \(\phi_{a}\) = sensible heat flow from the animals inside the enclosure (W)
\(\phi_{tr}\) = sensible heat flow due to transmission through the control surfaces but excluding the floor (W)
\(\phi_{sol}\) = sensible heat flow due to solar radiation through both opaque and glazed building elements (W)
\(\phi_{f}\) = sensible heat flow due to transmission through the floor (W)
\(\phi_{v}\) = sensible heat flow due to ventilation (W)
\(\phi_{m}\)= sensible heat flow from internal sources, such as motors and lights (W)
\(\gamma_{fog}\)= Boolean variable for the presence (\(\gamma_{fog}\)=1) or not (\(\gamma_{fog}\)=0) of a fogging system inside the livestock house
\(\phi_{fog}\)= sensible heat flow due to fogging system (W)
\(\gamma_{H}\)= Boolean variable for the presence (\(\gamma_{H}\)=1) or not (\(\gamma_{H}\)=0) of a supplemental heating system inside the livestock house
\(\phi_{H}\)= sensible heat flow due to supplemental heating system (W)
\(M_{el,k}\) = mass of the k th building element (kg)
\(C_{el,k}\) = total heat capacity of k th building element (kJ kg −1 K −1 )
\(\frac{dT_{air,i}}{dt}\) = variation of the indoor air temperature \(T_{air,i}\) with time t
When using Equation 5.2.1 for calculations and sizing, pay attention to the heat flows because each term could be positive or negative depending on the physical context. Usually, heat flows coming into a control volume (the animal house) are positive, and the ones flowing out are negative. For example, in Equation (5.2.1), the terms \(\phi_{a}\) and \(\phi_{sol}\) are always positive or zero, since they represent incoming heat flow from animals and solar radiation, respectively, while the values of \(\phi_{tr}\) and \(\phi_{v}\) could be positive or negative, depending on the difference in temperature inside and outside the animal house. The term \(\phi_{f}\) depends on the floor construction. Although \(\phi_{tr}\) and \(\phi_{f}\) are both transmission heat flows through the control surface, they are always separated. Estimating the heat transfer through the ground is very challenging (Albright, 1990; Panagakis and Axaopoulos, 2008; Costantino et al., 2017), for example, in pig houses with ventilated pits for manure storage. To simplify the energy balance, the term \(\phi_{tr}\) is often considered as the sum of \(\phi_{tr}\) and \(\phi_{f}\) and a corrective coefficient is used when \(\phi_{f}\) is calculated.
The term \(\phi_{fog}\) is always negative because it represents the sensible heat removed by water droplets of a fogging system. A fogging system provides cooling inside the animal house by putting a haze of tiny water droplets in the air to provide evaporative cooling for the animals. The term \(\phi_{H}\) is always positive. The parameters \(\gamma_{fog}\) and \(\gamma_{H}\) should not have a value of 1 at the same time but can both be 0.
Sensible heat from the animals, \(\phi_{a}\), depends on species and body mass and ambient temperature. Sensible and latent heat values can be found in the literature, for example from ASABE (2012), Hellickson & Walker (1983), or Lindley & Whitaker (1996), and more detailed data are available in Pedersen and Sällvik (2002), who express sensible and latent heat from animals as a function of animal weight, indoor air temperature, and animal activity. In complex animal houses the sensible heat flow from internal sources, such as motors (fans and automatic feeding systems) and lights term (\(\phi_{m}\)) can be included (Albright, 1990), but in many calculations it is excluded because is very small compared with \(\phi_{a}\) (Midwest Plan Service, 1987). That exclusion is further justified when energy-efficient technologies such as LED/gas-discharge lamps and brushless motors are used.
The product \(M_{el}\cdot C_{el}\) is the lumped effective heat capacity of a building element expressed in kJ K −1 . For each building element (walls and roof) the amount or mass of material must be known, and the amount of heat energy needed to raise the temperature of a unit mass of the material by one degree Celsius. The fraction \(\frac{dT_{air,i}}{dt}\) represents the variation of the indoor air temperature through time. This side of the equation represents the change in temperature of the building itself.
It is possible to include additional terms to Equation 5.2.1 (Albright, 1990; Esmay and Dixon, 1986) such as the sensible heat flow to evaporate the water inside the control volume from structures such as water troughs and a slurry store (\(\phi_{e}\)). Some authors consider it important (Hamilton et al., 2016), while others do not (Midwest Plan Service, 1987). Liberati and Zappavigna (2005) consider sensible heat exchange between manure (especially when collected in pits) and the air inside the enclosure (\(\phi_{man}\)) to be important in large-scale houses equipped with storage pits and manure when it is not removed frequently. A Boolean variable \(\gamma_{man}\) may generalize Equation 5.2.1 further.
Equation 5.2.1 is a dynamic energy balance. If a large time step (perhaps a week or more) is assumed it can be written for steady-state conditions, meaning that the state variables that describe the system can be considered constant with time, and the terms of the balance represent the average values for the system. For large time steps or in steady-state conditions with constant indoor and outdoor air temperature, heat accumulation by the building itself can be considered to be zero, so Equation 5.2.1 becomes:
\[ \phi_{a}+\phi_{tr}+\phi_{sol}+\phi_{v}+\gamma_{fog}\cdot \phi_{fog}=0 \]
To obtain the energy balance of a livestock house in cold condition requiring supplemental heating, the energy balance becomes:
\[ \phi_{a}+\phi_{tr}+\phi_{H}+\phi_{sol}+\phi_{v}=0 \]
Figure 5.2.1 presents an illustration of the sensible heat balance of Equation 5.2.3 for simple dairy cow housing. Equation 5.2.3 can be used to design a basic livestock house. Undoubtedly, the presented formulation is a simplification, and in literature, other terms are introduced in the energy balance. The calculation of each term of the energy balance of Equation 5.2.3 is provided in greater detail later in this chapter.
Mass Balance
Mass balances are necessary to plan the management of contaminants, such as carbon dioxide (CO 2 ), hydrogen sulfide (H 2 S), and ammonia (NH 3 ), produced by the animals (Esmay and Dixon, 1986) and to regulate the indoor environment temperature, moisture content, and relative humidity. Along with temperature and relative humidity, the indoor air quality (IAQ) must be controlled by ventilation to avoid animal health problems. Calculating ventilation requirements for contaminant control is a mass balance problem. With low indoor air temperatures, a minimum ventilation flow rate (base ventilation) is used to dilute contaminants such as H 2 S and NH 3 . The minimum ventilation flow rate can be increased to reduce the moisture content. When the indoor air temperature is higher than the cooling setpoint temperature used to maintain animal comfort, the ventilation flow rate must be increased to cool the animals (Esmay and Dixon, 1986). The maximum ventilation flow rate must avoid high airspeeds that hurt animal welfare. If cooling cannot be achieved using mass flow, a fo

## Match 1.40 — LibreTexts: 11: Energy and Chemical Processes
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://chem.libretexts.org/Courses/UWMilwaukee/CHE_125%3A_GOB_Introductory_Chemistry/11%3A_Energy_and_Chemical_Processes

11: Energy and Chemical Processes
-
-
Last updated
-
-
Save as PDF
-
Energy is a vital component of the world around us. Nearly every physical and chemical process, including all the chemical reactions discussed in previous chapters, occurs with a simultaneous energy change. In this chapter, we will explore the nature of energy and how energy and chemistry are related.
-
-
11.1: Prelude to Energy and Chemical Processes
-
Metabolism is the collective term for the chemical reactions that occur in cells and provide energy to keep cells alive. Some of the energy from metabolism is in the form of heat, and some animals use this heat to regulate their body temperatures. Such warm-blooded animals are called endotherms. In endotherms, problems with metabolism can lead to fluctuations in body temperature. When humans get sick, for instance, our body temperatures can rise higher than normal; we develop a fever.
-
-
11.2: Energy and Its Units
-
Energy is the ability to do work. Heat is the transfer of energy due to temperature differences. Energy and heat are expressed in units of joules.
-
-
11.3: Heat
-
Heat transfer is related to temperature change. Heat is equal to the product of the mass, the change in temperature, and a proportionality constant called the specific heat.
-
-
11.4: Phase Changes
-
There is an energy change associated with any phase change.
-
-
11.5: Bond Energies and Chemical Reactions
-
Atoms are held together by a certain amount of energy called bond energy. Chemical processes are labeled as exothermic or endothermic based on whether they give off or absorb energy, respectively.
-
-
11.6: The Energy of Biochemical Reactions
-
Energy to power the human body comes from chemical reactions.
-
-
11.E: Energy and Chemical Processes (Exercises)
-
Problems and Solutions to accompany the chapter.
-
-
11.S: Energy and Chemical Processes (Summary)
-
To ensure that you understand the material in this chapter, you should review the meanings of the following bold terms in the following summary and ask yourself how they relate to the topics in the chapter.
Template:HideTOC

## Match 1.39 — LibreTexts: 2.6: The Energy of the System
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/DeVoes_Thermodynamics_and_Chemistry/02%3A_Systems_and_Their_Properties/2.06%3A_The_Energy_of_the_System

2.6: The Energy of the System
A large part of classical thermodynamics is concerned with the energy of the system. The total energy of a system is an extensive property whose value at any one instant cannot be measured in any practical way, but whose change is the focus of the first law of thermodynamics (Chap. 3).
2.6.1 Energy and reference frames
Classical thermodynamics ignores microscopic properties such as the behavior of individual atoms and molecules. Nevertheless, a consideration of the classical mechanics of particles will help us to understand the sources of the potential and kinetic energy of a thermodynamic system.
In classical mechanics, the energy of a collection of interacting point particles is the sum of the kinetic energy \(\onehalf mv^2\) of each particle (where \(m\) is the particle’s mass and \(v\) is its velocity), and of various kinds of potential energies. The potential energies are defined in such a way that if the particles are isolated from the rest of the universe, as the particles move and interact with one another the total energy (kinetic plus potential) is constant over time. This principle of the conservation of energy also holds for real atoms and molecules whose electronic, vibrational, and rotational energies, absent in point particles, are additional contributions to the total energy.
The positions and velocities of particles must be measured in a specified system of coordinates called a reference frame . This e-book will use reference frames with Cartesian axes. Since the kinetic energy of a particle is a function of velocity, the kinetic energy depends on the choice of the reference frame. A particularly important kind is an inertial frame, one in which Newton’s laws of motion are obeyed (see Sec. G.1 in Appendix G).
A reference frame whose axes are fixed relative to the earth’s surface is what this e-book will call a lab frame . A lab frame for all practical purposes is inertial (Sec. G.10). It is in this kind of stationary frame that the laws of thermodynamics have been found by experiment to be valid.
The energy \(E\) of a thermodynamic system is the sum of the energies of the particles contained in it and the potential energies of interaction between these particles. Just as for an individual particle, the energy of the system depends on the reference frame in which it is measured. The energy of the system may change during a process, but the principle of the conservation of energy ensures that the sum of the energy of the system, the energy of the surroundings, and any energy shared by both, all measured in the same reference frame, remains constant over time.
This e-book uses the symbol \(E\sys\) for the energy of the system measured in a specified inertial frame. The system could be located in a weightless environment in outer space, and the inertial frame could be one that is either fixed or moving at constant velocity relative to local stars. Usually, however, the system is located in the earth’s gravitational field, and the appropriate inertial frame is then an earth-fixed lab frame.
If during a process the system as a whole undergoes motion or rotation relative to the inertial frame, then \(E\sys\) depends in part on coordinates that are not properties of the system. In such situations \(E\sys\) is not a state function, and we need the concept of internal energy.
2.6.2 Internal energy
The internal energy , \(U\!\), is the energy of the system measured in a reference frame that allows \(U\) to be a state function—that is, at each instant the value of \(U\) depends only on the state of the system. This e-book will call a reference frame with this property a local frame . A local frame may also be, but is not necessarily, an earth-fixed lab frame.
Here is a simple illustration of the distinction between the energy \(E\sys\) of a system measured in a lab frame and the internal energy \(U\!\) measured in a local frame. Let the system be a fixed amount of water contained in a glass beaker. (The glass material of the beaker is part of the surroundings.) We can define the state of this system by two independent variables: the temperature, \(T\), and pressure, \(p\), of the water. The most convenient local frame in which to measure \(U\) in this case is a frame fixed with respect to the beaker.
-
Section 3.1.1 will show that the relation between changes of the system energy and the internal energy in this example is \(\Del E\sys = \Del E\subs{k} + \Del E\subs{p} + \Del U\), where \(E\subs{k}\) and \(E\subs{p}\) are the kinetic and potential energies of the system as a whole measured in the lab frame.
Our choice of the local frame used to define the internal energy \(U\) of any particular system during a given process is to some extent arbitrary. Three possible choices are as follows.
- Is it possible to determine a numerical value for the internal energy of a system? The total energy of a body of mass \(m\) when it is at rest is given by the Einstein relation \(E = mc_0^2\), where \(c_0\) is the speed of light in vacuum. In principle, then, we could calculate the internal energy \(U\) of a system at rest from its mass, and we could determine \(\Del U\) for a process from the change in mass. In practice, however, an absolute value of \(U\) calculated from a measured mass has too much uncertainty to be of any practical use. For example, the typical uncertainty of the mass of an object measured with a microbalance, about \(0.1\units{\(\mu\)g}\) (Table 2.2), would introduce the enormous uncertainty in energy of about \(10^{10}\) joules. Only values of the change \(\Del U\) are useful, and these values cannot be calculated from \(\Del m\) because the change in mass during an ordinary chemical process is much too small to be detected.
