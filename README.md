# This Project is Currently Not Being Worked On
# What is BMAN
BMAN or Basic Maneuver Notator is a simple program for writing out drill charts and will hopefully end the days of handwriten charts that have been photocopied 500 times. I of course don't really have a massive scope for this project, but if you would like to suggest changes or contribute feel free.
# Roadmap For the (B)asic (MA)neuver (N)otator (BMAN)

## Structure
```
            Band
             |
         ----------
  Squads / Sections / Gard
       |            |
 ---------------------------
|       |         |         |
Individual People on the Last Tier
```
Behind the scenes the band as a whole will contain all the instructions, and will either call it out or give each individual it's [instructions](#instruction-encoding). When the drill begins or the band starts, the individuals will either receive instructions as they come, or will use their list of instructions to know what they should do and where they should be.


## Instruction Encoding
The encoding structure should go as follows; each instruction will have specific properties. Things like who or what group is performing an action, and what the action is (marking time, about face, etc.). These instructions will be "Encoded" into a string where each instruction has the previously mentioned values in a shorthand format somethind like: H3mt2x8,H4fm2x8. However, this solution has a problem I will need to adress, it seems like it lacks some obviously needed inputs, and doesn't really show what someone should do at a specific time. I may be able to fix this with a system where each individual has a similar string that they must follow and missing instructions would just mean to do nothing, this solution however may bloat file sizes.
