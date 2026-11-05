# Source pack — subjects/operations-research/foundational/linear-programming
Lesson title: Linear Programming
Level: foundational
Match confidence: 3.09

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.09 — LibreTexts: 4: Linear Programming - The Simplex Method
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Applied_Finite_Mathematics_(Sekhon_and_Bloom)/04%3A_Linear_Programming_The_Simplex_Method

4: Linear Programming - The Simplex Method
In this chapter, you will:
- Investigate real world applications of linear programming and related methods.
- Solve linear programming maximization problems using the simplex method.
- Solve linear programming minimization problems using the simplex method.
-
- 4.2: Maximization By The Simplex Method
- The simplex method uses an approach that is very efficient. It does not compute the value of the objective function at every point; instead, it begins with a corner point of the feasibility region where all the main variables are zero and then systematically moves from corner point to corner point, while improving the value of the objective function at each stage. The process continues until the optimal solution is found.
-
- 4.3: Minimization By The Simplex Method
- In this section, we will solve the standard linear programming minimization problems using the simplex method. The procedure to solve these problems involves solving an associated problem called the dual problem. The solution of the dual problem is used to find the solution of the original problem. The dual problem is a maximization problem, which we learned to solve in the last section. We first solve the dual problem by the simplex method.
Thumbnail: Polyhedron of simplex algorithm in 3D. (CC BY-SA 3.0; Sdo via Wikipedia)

## Match 3.09 — LibreTexts: 9: Linear Programming - The Simplex Method
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Fresno_City_College/New_FCC_DS_21_Finite_Mathematics_-_Spring_2023/09%3A_Linear_Programming_-_The_Simplex_Method

9: Linear Programming - The Simplex Method
In this chapter, you will:
- Investigate real world applications of linear programming and related methods.
- Solve linear programming maximization problems using the simplex method.
- Solve linear programming minimization problems using the simplex method.
-
- 9.2: Maximization By The Simplex Method
- The simplex method uses an approach that is very efficient. It does not compute the value of the objective function at every point; instead, it begins with a corner point of the feasibility region where all the main variables are zero and then systematically moves from corner point to corner point, while improving the value of the objective function at each stage. The process continues until the optimal solution is found.
-
- 9.3: Minimization By The Simplex Method
- In this section, we will solve the standard linear programming minimization problems using the simplex method. The procedure to solve these problems involves solving an associated problem called the dual problem. The solution of the dual problem is used to find the solution of the original problem. The dual problem is a maximization problem, which we learned to solve in the last section. We first solve the dual problem by the simplex method.
Thumbnail: Polyhedron of simplex algorithm in 3D. (CC BY-SA 3.0; Sdo via Wikipedia)

## Match 3.05 — LibreTexts: 13.6: Integer Solutions of Linear Programming Problems
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Combinatorics_(Keller_and_Trotter)/13%3A_Network_Flows/13.06%3A_Integer_Solutions_of_Linear_Programming_Problems

13.6: Integer Solutions of Linear Programming Problems
A linear programming problem is an optimization problem that can be stated in the following form: Find the maximum value of a linear function
\(c_1x_1+c_2x_2+c_3x_3+ \cdot \cdot \cdot +c_nx_n\)
subject to \(m\) constraints \(C_1\), \(C_2\),…,\(C_m\), where each constraint \(C_i\) is a linear equation of the form:
\(C_i\): \(a_{i1}x_1+a_{i2}x_2+a_{i3}x_3+ \cdot \cdot \cdot +a_{in}x_n=b_i\)
where all coefficients and constants are real numbers.
While the general subject of linear programming is far too broad for this course, we would be remiss if we didn't point out that:
- Linear programming problems are a very important class of optimization problems and they have many applications in engineering, science, and industrial settings.
- There are relatively efficient algorithms for finding solutions to linear programming problems.
- A linear programming problem posed with rational coefficients and constants has an optimal solution with rational values—if it has an optimal solution at all.
- A linear programming problem posed with integer coefficients and constants need not have an optimal solution with integer values—even when it has an optimal solution with rational values.
- A very important theme in operations research is to determine when a linear programming problem posed in integers has an optimal solution with integer values. This is a subtle and often very difficult problem.
- The problem of finding a maximum flow in a network is a special case of a linear programming problem.
- A network flow problem in which all capacities are integers has a maximum flow in which the flow on every edge is an integer. The Ford-Fulkerson labeling algorithm guarantees this!
- In general, linear programming algorithms are not used on networks. Instead, special purpose algorithms, such as Ford-Fulkerson, have proven to be more efficient in practice.
