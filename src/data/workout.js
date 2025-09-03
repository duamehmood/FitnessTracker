
// volume=0;
// exercises.forEach(exercise => {
//     exercise.sets.forEach(set => {
//         volume += set.reps * set.weight;
//     });
// });

// sets=0;
// exercises.forEach(exercise => {
//     sets += exercise.sets.length;
// });

export const workouts = [

    {
        "id": 1,
        "name": "Push Day",
        "category": "Strength Training",
        "desc": "Chest, shoulders, and triceps focused workout for upper body strength development.",
         "exercises": [
            {
                "id": 1,
                "sets": [
                    {
                        "reps": 12,
                        "weight": 50
                    },
                    {
                        "reps": 8,
                        "weight": 60
                    }
                ]
            },
            {
                "id": 2,
                "sets": [
                    {
                        "reps": 12,
                        "weight": 40
                    },
                    {
                        "reps": 6,
                        "weight": 50
                    },
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Pull Day",
        "category": "Strength Training",
        "desc": "Back, biceps, and rear deltoid focused workout for pulling strength and muscle development.",
        "exercises": [
            {
                "id": 1,
                "sets": [
                    {
                        "reps": 6,
                        "weight": 50
                    },
                    {
                        "reps": 10,
                        "weight": 55
                    },
                    {
                        "reps": 8,
                        "weight": 60
                    }
                ]
            },
            {
                "id": 2,
                "sets": [
                    {
                        "reps": 4,
                        "weight": 40
                    },
                    {
                        "reps": 6,
                        "weight": 50
                    },
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Leg Day",
        "category": "Strength Training",
        "desc": "Complete lower body workout targeting quads, hamstrings, glutes, and calves for maximum leg development.",
         "exercises": [
            {
                "id": 1,
                "sets": [
                    {
                        "reps": 10,
                        "weight": 50
                    },
                    {
                        "reps": 10,
                        "weight": 55
                    },
                    {
                        "reps": 8,
                        "weight": 60
                    }
                ]
            },
            {
                "id": 2,
                "sets": [
                    {
                        "reps": 8,
                        "weight": 40
                    },
                    {
                        "reps": 6,
                        "weight": 50
                    },
                ]
            },
             {
                "id": 3,
                "sets": [
                    {
                        "reps": 8,
                        "weight": 40
                    },
                    {
                        "reps": 6,
                        "weight": 50
                    },
                ]
            },
        ]
    }


];
