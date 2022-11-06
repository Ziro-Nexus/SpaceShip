
export enum ISkillsStates {
    DAMAGE_ENEMY,
    BOOST_LIFE,
    BOOST_DEFENSE,
    BOOST_ATTACK,
    BOOST_SPEED,
    BOOST_ALLY_LIFE,
    BOOST_ALLY_DEFENSE,
    BOOST_ALLY_ATTACK,
    BOOST_ALLY_SPEED
}

interface ISkillsEffects{SkillState: ISkillsStates, value: number}


export interface ISkills {
    HabilityName: string,
    Effects: ISkillsEffects
}
