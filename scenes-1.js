const scenes = {
    "1": {
        "dialogues": [
            "call FadeScene 2"
        ],
        "choices": []
    },
    "2": {
        "dialogues": [
            "I'm Junior Officer Nolen. Or just Maddie. An Enforcer, dedicated to protecting the people of Piltover from danger and sometimes from themselves.",
            "I chose to become an officer because..."
        ],
        "choices": [
            {
                "text": "... this city deserves to be a safe place for everyone.",
                "nextScreen": 3,
                "variableAssignments": {
                    "c1": 0
                }
            },
            {
                "text": "... someone has to protect those who can't protect themselves.",
                "nextScreen": 3,
                "variableAssignments": {
                    "c1": 1
                }
            }
        ]
    },
    "3": {
        "dialogues": [
            "I was born and raised in Piltover. Since childhood, I've been curious and full of questions.",
            "I loved learning new things, making friends, and exploring new places.",
            "However, all my life I struggled with..."
        ],
        "choices": [
            {
                "text": "... an overwhelming sense of justice.",
                "nextScreen": 4,
                "variableAssignments": {
                    "c2": 0
                }
            },
            {
                "text": "... anxiety over the safety of my loved ones.",
                "nextScreen": 5,
                "variableAssignments": {
                    "c2": 1
                }
            }
        ]
    },
    "4": {
        "dialogues": [
            "I could never just walk away from injustice, even if it meant getting into a fight."
        ],
        "choices": [
            {
                "text": "And even if it meant bruises and scrapes.",
                "nextScreen": 6,
                "variableAssignments": {}
            }
        ]
    },
    "5": {
        "dialogues": [
            "The wellbeing of my loved ones always came first.",
            "I worried most about my cousin, Gabi. Clumsy and naive, she worked in the Public Information Office of the Piltover Fire Department, and seemed to find her way into every possible mishap."
        ],
        "choices": [
            {
                "text": "The anxiety about her never left me.",
                "nextScreen": 6,
                "variableAssignments": {}
            }
        ]
    },
    "6": {
        "dialogues": [
            "call FadeScene 7"
        ],
        "choices": []
    },
    "7": {
        "dialogues": [
            "Today, my partner Steb and I were assigned to patrol the southwest part of Piltover.",
            "It’s a quiet district. Probably my favorite one to patrol. Sure, there's some petty theft here and there, but nothing major ever happens here, at least not in my memory."
        ],
        "choices": [
            {
                "text": "— Steb, how about grabbing some coffee from that café over there?",
                "nextScreen": 8,
                "variableAssignments": {}
            }
        ]
    },
    "8": {
        "dialogues": [
            "— Coffee, again? — Steb rolled his eyes. — Maddie, we had coffee half an hour ago.",
            "— Yeah, that was half an hour ago!",
            "— Right. And before that, we stopped by that same café twice already. Where does all that coffee go? You're so... I mean, petite. Small. Short. Like a Yordle."
        ],
        "choices": [
            {
                "text": "— Looks can be deceiving.",
                "nextScreen": 9,
                "variableAssignments": {}
            },
            {
                "text": "— I am NOT a Yordle!",
                "nextScreen": 9,
                "variableAssignments": {}
            }
        ]
    },
    "9": {
        "dialogues": [
            "— Sure, sure. You're just bigger on the inside, and your veins are full of coffee instead of blood.",
            "— Don't start.",
            "Steb knew arguing with me was pointless, so he just nodded silently. A few moments later, we were already inside the café."
        ],
        "choices": [
            {
                "text": "— Oat milk latte with caramel syrup and a cocoa sprinkle, please.",
                "nextScreen": 10,
                "variableAssignments": {}
            },
            {
                "text": "— Just a latte.",
                "nextScreen": 11,
                "variableAssignments": {}
            }
        ]
    },
    "10": {
        "dialogues": [
            "The barista raised an eyebrow and glanced over at Steb.",
            "— Espresso.",
            "The barista nodded, then looked back at me:",
            "— So, a latte it is."
        ],
        "choices": [
            {
                "text": "— Yep, a latte it is.",
                "nextScreen": 124,
                "variableAssignments": {}
            },
            {
                "text": "— With oat milk, caramel syrup, and a sprinkle of cocoa.",
                "nextScreen": 12,
                "variableAssignments": {}
            }
        ]
    },
    "11": {
        "dialogues": [
            "— And an espresso for me, — Steb added.",
            "The barista nodded and got to work making our coffee.",
            "Steb and I took a seat at a table in the corner. The day was in full swing, and the market outside was bustling, almost as if it were a living thing. The narrow pathways between the rows of stalls were packed with people. Some were carefully selecting fruits and vegetables, checking for ripeness, while others were animatedly haggling with sellers, gesturing wildly."
        ],
        "choices": [
            {
                "text": "The door to the café swung open, and in walked Gabi.",
                "nextScreen": 13,
                "variableAssignments": {}
            }
        ]
    },
    "12": {
        "dialogues": [
            "— A latte. With regular milk, — the barista said curtly.",
            "Without waiting for me to argue, he turned away to the coffee machine and started making the drinks.",
            "Steb and I took a seat at a corner table, and a couple of minutes later, our coffee was ready. The day was in full swing, and the market outside was bustling, almost like a living entity itself. Narrow pathways between the rows of stalls were filled with people. Some leisurely chose fruits and vegetables, checking them for ripeness, while others were loudly arguing over prices, their hands flying in all directions."
        ],
        "choices": [
            {
                "text": "The door to the café opened, and Gabi appeared in the doorway.",
                "nextScreen": 13,
                "variableAssignments": {}
            }
        ]
    },
    "13": {
        "dialogues": [
            "Oh no. Gabriella. My cousin. Practically my doppelganger, just with softer, more childlike features.",
            "I love Gabi, but usually, every encounter with her ends in some kind of disaster.",
            "— Maddie! — she shouted, rushing towards me with open arms. — What are the odds?! You won’t believe this, I was walking by, and I saw my reflection in the window, except it wasn't me — it was you! And I just had to come in! Oh wow, you’re here with... a friend?"
        ],
        "choices": [
            {
                "text": "I didn't even have a chance to reply before Gabi let go of me...",
                "nextScreen": 14,
                "variableAssignments": {}
            }
        ]
    },
    "14": {
        "dialogues": [
            "... and threw herself at a very bewildered Steb. He sat there, wide-eyed, not sure how to respond — this was the first time he'd ever met Gabriella.",
            "— Oh, I'm so sorry, — she quickly apologized, releasing Steb with an awkward smile. — You must be Maddie's partner, right? I mean, judging by the uniform, well, you know, you're in uniform... — she stuttered, realizing she was rambling. — I'm Gabi! Maddie's cousin. We're really close, like, from childhood! Right, Maddie?"
        ],
        "choices": [
            {
                "text": "— Uh, yeah, but...",
                "nextScreen": 15,
                "variableAssignments": {}
            },
            {
                "text": "— Well, actually...",
                "nextScreen": 15,
                "variableAssignments": {}
            }
        ]
    },
    "15": {
        "dialogues": [
            "— Isn't it great that we ran into each other? — Gabi went on, not waiting for me to finish. — I was just walking, you know, I like walking around here. It's my workday, but I don't have any work right now! And then I passed by the fountain, and there was someone lying there! So I thought I should help because, you know, I'm from the fire department... I mean, I’m not a firefighter, but I do know first aid! They make us take those courses because we...",
            "I was losing track of Gabi's endless stream of words, but I understood that she saw someone lying by the fountain."
        ],
        "choices": [
            {
                "text": "— Someone needed help?",
                "nextScreen": 16,
                "variableAssignments": {}
            }
        ]
    },
    "16": {
        "dialogues": [
            "— What? No, why? Oh! Yes! — Gabi kept babbling. Judging by the expression on Steb's face, he was already lost. — I tried to help, but they told me to get lost and stop bothering them!"
        ],
        "choices": [
            {
                "text": "Well, it seems Steb and I have some work cut out for us.",
                "nextScreen": 17,
                "variableAssignments": {}
            }
        ]
    },
    "17": {
        "dialogues": [
            "Steb was finally coming back to his senses after Gabi's intense greeting. We exchanged glances.",
            "— Just some drunkards, — he grumbled.",
            "— Not a common sight for this area... especially by the fountain. Shall we go?",
            "Steb downed his espresso in one gulp, setting the empty cup down with a loud clatter. Grimacing, he nodded."
        ],
        "choices": [
            {
                "text": "I handed my latte to Gabi.",
                "nextScreen": 18,
                "variableAssignments": {}
            },
            {
                "text": "I copied Steb, downing my coffee in one go.",
                "nextScreen": 19,
                "variableAssignments": {}
            }
        ]
    },
    "18": {
        "dialogues": [
            "I handed my latte to my cousin and stood up from the table. Naturally, she almost spilled it, but thankfully, nothing happened.",
            "— For me?! Thank you, Maddie! You’re the best!"
        ],
        "choices": [
            {
                "text": "— Which fountain was it where you saw them?",
                "nextScreen": 21,
                "variableAssignments": {}
            }
        ]
    },
    "19": {
        "dialogues": [
            "I followed Steb’s lead and downed my latte in one gulp, only to cough violently right after. Yeah, I wasn't very good at chugging coffee. It even came out of my nose, and Steb shook his head:",
            "— One Nolen is chaos, two Nolens is a catastrophe."
        ],
        "choices": [
            {
                "text": "— I’m not a Nolen! I’m a Rossellini! — Gabi declared proudly.",
                "nextScreen": 20,
                "variableAssignments": {}
            }
        ]
    },
    "20": {
        "dialogues": [
            "— My apologies, Gabriella Rossellini, — Steb replied, feigning politeness as he bowed. — Maddie, stop choking on your coffee, and let's go.",
            "I kept coughing, but slowly started to recover."
        ],
        "choices": [
            {
                "text": "— So... cough... Gabi, which fountain was it you saw them at?",
                "nextScreen": 21,
                "variableAssignments": {}
            }
        ]
    },
    "21": {
        "dialogues": [
            "— Let’s see... You go left from the market... No, wait! There was that spice shop... Oh, right! Go from the market towards the central alley, then pass under the arch by the flower stall, and then...",
            "— Got it, — Steb cut her off."
        ],
        "choices": [
            {
                "text": "— Sorry, Gabi, we’ve got to go check it out. Thanks for telling us!",
                "nextScreen": 22,
                "variableAssignments": {}
            },
            {
                "text": "— Thanks, Gabi. We need to get going.",
                "nextScreen": 22,
                "variableAssignments": {}
            }
        ]
    },
    "22": {
        "dialogues": [
            "Steb and I left the café, heading in the direction Gabi had given us, while she stayed behind, already chatting with the barista.",
            "— Just like you, — Steb smirked, looking ahead. His interest had awakened — finally something remotely interesting for today — as he adjusted his tactical belt with his baton and holster attached.",
            "— Very funny, — I snorted."
        ],
        "choices": [
            {
                "text": "Reaching the location Gabi had mentioned, we found ourselves at the fountain.",
                "nextScreen": 23,
                "variableAssignments": {}
            }
        ]
    },
    "23": {
        "dialogues": [
            "The first thing we noticed was the bottles scattered all over the place. Sticking out of the fountain was a huge leg — someone was snoring like a bear, half submerged in the water.",
            "And on the fountain's edge, a girl with short red hair and a tattoo on her face was sitting, clutching her head and squinting against the sunlight.",
            "I'd never seen her before."
        ],
        "choices": [
            {
                "text": "But I recognized her immediately.",
                "nextScreen": 24,
                "variableAssignments": {}
            }
        ]
    },
    "24": {
    "dialogues": [
        "— Vi? — One of the bottles rolled toward me. I stopped it with my foot and stepped closer.",
        "She looked up, grabbing the nearest bottle from the floor and checking if there was anything left in it.",
        "— Who are you? And how do you know my name? — her voice was hoarse, firm."
    ],
    "choices": [
        {
            "text": "— Junior Officer Nolen. Maddie. And... uh, it's written on your face.",
            "nextScreen": 25,
            "variableAssignments": {}
        }
    ]
},
    "25": {
    "dialogues": [
        "Vi blinked, clearly not expecting that response, and reflexively brushed her fingers across the tattoo on her cheek.",
        "— So what is it? Random search? Escort off the property? Or you just here to waste my time?"
    ],
    "choices": [
        {
            "text": "— Search? No... No-no! You're... something of a legend among the Enforcers.",
            "nextScreen": 26,
            "variableAssignments": {}
        }
    ]
},
    "26": {
        "dialogues": [
            "I felt a spark of nervous excitement stir inside me. I’d heard plenty about Vi, but chatting with her casually like this? It felt... unreal."
        ],
        "choices": [
            {
                "text": "— Caitlyn made quite a scene at the station when they tried to deny your enlistment.",
                "nextScreen": 27,
                "variableAssignments": {}
            }
        ]
    },
    "27": {
        "dialogues": [
            "Vi took a swig from her bottle, but Caitlyn's name made her pause mid-gulp. She nearly choked, setting the bottle aside.",
            " — Oh, I have to ask... — I continued, — Is it all true? You went after Silco alone, when the council wouldn’t back you? Took on his whole gang?",
            "— Cait said that? — she asked slowly, and I noticed the faint twitch at the corners of her lips."
        ],
        "choices": [
            {
                "text": "— She said, 'If all Enforcers had a heart like yours, we could take on Noxus itself.'",
                "nextScreen": 28,
                "variableAssignments": {}
            }
        ]
    },
    "28": {
        "dialogues": [
            "— Yeah, that sounds like her... typical Cait.",
            "— Then she threatened, — Steb chimed in, — To withdraw her family's funding."
        ],
        "choices": [
            {
                "text": "— Anyhow, I'm glad you're joining up.",
                "nextScreen": 29,
                "variableAssignments": {}
            }
        ]
    },
    "29": {
        "dialogues": [
            "I smiled and extended a hand.",
            "— After the sheriff betrayed us... Well, let's just say... it’s nice to know there are still good ones left.",
            "Vi looked at my hand, as if deciding what to do, but eventually shook it firmly and confidently."
        ],
        "choices": [
            {
                "text": "A loud rustling came from the fountain nearby.",
                "nextScreen": 30,
                "variableAssignments": {}
            }
        ]
    },
    "30": {
        "dialogues": [
            "— What’s going on here? — A burly man, half-asleep in the fountain, finally stirred, and I recognized him immediately: Loris. Once an Enforcer, now a drunk, dismissed for his love of booze.",
            "I’d never spoken to him, but I’d seen his photo on the wall of honor when I first graduated from the academy and joined Sheriff Kiramman’s command. Steb had also told me bits and pieces. Paradoxically, Loris had been one of the best detectives, and yet he was still let go."
        ],
        "choices": [
            {
                "text": "— Go back to sleep, big guy. I’ll fill you in later, — Vi waved him off.",
                "nextScreen": 31,
                "variableAssignments": {}
            }
        ]
    },
    "31": {
        "dialogues": [
            "Loris turned onto his side and immediately began snoring again, now louder than before. Vi turned to me:",
            "— Officer Nolen, right?",
            ""
        ],
        "choices": [
            {
                "text": "— Junior Officer Nolen, — Steb corrected her.",
                "nextScreen": 32,
                "variableAssignments": {}
            }
        ]
    },
    "32": {
        "dialogues": [
            "— Doesn’t matter, — Vi didn’t even glance his way. — So, Cait’s currently...",
            "She didn’t get to finish. The hextech loudspeakers mounted on nearby buildings crackled to life. A slow, solemn 'Requiem for the Brave,' dedicated to the Council members lost in the recent attack, signaled the start of the ceremony. Steb nodded at me and immediately headed for the square. For the ceremony, we Enforcers were to leave our patrols and take assigned posts at the square."
        ],
        "choices": [
            {
                "text": "— Nolen, time to go, — Steb’s voice called from behind me.",
                "nextScreen": 33,
                "variableAssignments": {}
            }
        ]
    },
    "33": {
        "dialogues": [
            "— Duty calls, — I smiled. — A real honor, Vi.",
            "Time was short, so after saying goodbye to Vi, I ran after Steb."
        ],
        "choices": [
            {
                "text": "We walked together towards the square.",
                "nextScreen": 34,
                "variableAssignments": {}
            }
        ]
    },
    "34": {
        "dialogues": [
            "Some strolled alongside us, while others hurried to catch up with friends, staying in small groups. The hextech speakers continued playing 'Requiem for the Brave,' reminding Piltover of its recent losses."
        ],
        "choices": [
            {
                "text": "— So that’s Loris, huh? — I said, slowing my pace.",
                "nextScreen": 35,
                "variableAssignments": {}
            },
            {
                "text": "— Is that the Loris you told me about?",
                "nextScreen": 35,
                "variableAssignments": {}
            }
        ]
    },
    "35": {
        "dialogues": [
            "Honestly, my first impression of him was... underwhelming.",
            "— He was a good officer, — Steb muttered, adjusting his tactical belt. — Until he started drinking."
        ],
        "choices": [
            {
                "text": "— You knew him well, didn’t you?",
                "nextScreen": 36,
                "variableAssignments": {}
            }
        ]
    },
    "36": {
        "dialogues": [
            "— Yeah, we got along fine. Not friends exactly, but more like acquaintances, — Steb spoke haltingly, his words coming with difficulty. — That is, until we got assigned to patrol the Old Quarter together."
        ],
        "choices": [
            {
                "text": "— Patrol? But wasn’t he a detective?",
                "nextScreen": 37,
                "variableAssignments": {}
            }
        ]
    },
    "37": {
        "dialogues": [
            "— He was. But that patrol... it was like punishment after... well, after another complaint. By then, nobody liked him much. Quiet, gloomy, always reeking of booze... not the kind of guy to make a great impression."
        ],
        "choices": [
            {
                "text": "— Did you dislike him too?",
                "nextScreen": 38,
                "variableAssignments": {}
            }
        ]
    },
    "38": {
        "dialogues": [
            "— I tolerated him. One week. Two. And then the fire happened, — Steb spoke through gritted teeth, and I didn’t interrupt. — Loris showed up drunk before a shift. Not unusual for him, but that time he was so smashed that when we arrived at the scene, he could barely stand. And there were people burning alive in there! We were supposed to help, but he just swayed, useless as a broken clock."
        ],
        "choices": [
            {
                "text": "Steb's voice grew rougher. He seemed lost in that memory.",
                "nextScreen": 39,
                "variableAssignments": {}
            }
        ]
    },
    "39": {
        "dialogues": [
            "— When we got back, I wrote the report. That was the last straw. He got booted a week later. Just like that, after one of our shifts, dispatch told him not to report back.",
            "I began to piece it together. It must have been the fire I’d read about just before finishing my training: a massive blaze in an Old Quarter workshop. The flames spread to a neighboring building... a department store, I think. My cousin, Gabi, had written a press release on it. Six or seven people died that day."
        ],
        "choices": [
            {
                "text": "— That was the fire?",
                "nextScreen": 40,
                "variableAssignments": {}
            },
            {
                "text": "— That was arson?",
                "nextScreen": 40,
                "variableAssignments": {}
            }
        ]
    },
    "40": {
        "dialogues": [
            "— It was hell.",
            "— You did the right thing by writing that report, — I said, though I could hear my words lacked conviction.",
            "— I know, — he cut me off. — But you know what’s the worst part? I saw what it did to him. Every time he walked past me at the station, his face... Damn, Maddie, he hated me. I know it."
        ],
        "choices": [
            {
                "text": "I looked at him in silence. I didn’t know what to say.",
                "nextScreen": 41,
                "variableAssignments": {}
            }
        ]
    },
    "41": {
        "dialogues": [
            "Stories like that weren’t uncommon in Piltover. We have so many Enforcers, all polished and heroic, capable of taking on anything. But everyone has a weakness.",
            "— You did what you could, — I finally said."
        ],
        "choices": [
            {
                "text": "Cliché. But there wasn’t much else to say.",
                "nextScreen": 42,
                "variableAssignments": {}
            }
        ]
    },
    "42": {
        "dialogues": [
            "Steb nodded.",
            "We were approaching the ceremony site — the square was bustling with life. People steadily filled the space in front of the stage, forming a dense crowd. There were many Enforcers around, checking anyone suspicious before letting them through."
        ],
        "choices": [
            {
                "text": "We took our positions in front of the stage, standing side by side.",
                "nextScreen": 43,
                "variableAssignments": {}
            }
        ]
    },
    "43": {
        "dialogues": [
            "Steb was only a few meters away. Our eyes met occasionally, and he would fake a yawn, as if to say the assignment was boring.",
            "When the hextech speakers fell silent, Councilor Mel Medarda stepped onto the stage. Her posture, sculpted features, and elegant gown immediately drew the crowd's attention."
        ],
        "choices": [
            {
                "text": "As soon as she reached the podium, the noise began to fade.",
                "nextScreen": 44,
                "variableAssignments": {}
            }
        ]
    },
    "44": {
        "dialogues": [
            "— One of the many privileges of serving as your Councilor, — she began, addressing the crowd, — is having the occasion now and again to stand behind this podium to behold so many joined together not by birth or dictum, but by all that we share. Our hope. Our curiosity. Our compulsion to leave behind us a world better than that before. These things we share are what make us one people.",
            "Her words rang with conviction."
        ],
        "choices": [
            {
                "text": "If anyone could speak so eloquently, it was Mel.",
                "nextScreen": 45,
                "variableAssignments": {}
            }
        ]
    },
    "45": {
        "dialogues": [
            "— Today, we share an unthinkable loss, — she continued. — Councilor Irius Bolbock, Councilor Torman Hoskel, and Councilor Cassandra Kiramman were taken from us. But they shall not be forgotten."
        ],
        "choices": [
            {
                "text": "Steb gestured toward the crowd.",
                "nextScreen": 46,
                "variableAssignments": {}
            }
        ]
    },
    "46": {
        "dialogues": [
            "I followed Steb's gaze. Vi and Loris were pushing through the dense crowd, heading toward the stage. Vi led the way with her usual determination, paying no attention to the people around her. Loris lagged behind, clearly in poor shape — yawning, lazily rubbing his eyes, and looking as though he barely knew where he was.",
            "— I don’t like this, — Steb muttered, keeping his eyes on them.",
            "Vi moved quickly, her gaze fixed on the stage. Or perhaps on someone near it — it was hard to tell in the throng of people."
        ],
        "choices": [
            {
                "text": "Stay at your post.",
                "nextScreen": 47,
                "variableAssignments": {
                    "c3": 0
                }
            },
            {
                "text": "Move along the stage toward where Vi is heading.",
                "nextScreen": 115,
                "variableAssignments": {
                    "c3": 1
                }
            }
        ]
    },
    "47": {
        "dialogues": [
            "On stage, Mel continued her speech, her voice steady and calm as always:",
            "— We commissioned this statue, so we can remember them for their countless contributions, their lifetimes of service, not the cravent act that stole them away.",
            "At that moment, Vi stopped, seemingly making a decision. She abruptly turned toward the barrier separating the crowd from the stage and started heading straight for it. The Enforcers guarding the perimeter noticed her immediately and grabbed her."
        ],
        "choices": [
            {
                "text": "— She’s looking to take Mel Medarda’s spot, — Steb chuckled, though I could see the tension in his face.",
                "nextScreen": 48,
                "variableAssignments": {}
            }
        ]
    },
    "48": {
        "dialogues": [
            "Vi struggled furiously, shouting and pointing toward the stage, but we were too far away to catch her words.",
            "Suddenly, a figure appeared on the staircase leading to the stage.",
            "— Who’s that? — Steb frowned, his eyes fixed on the figure climbing the stairs.",
            "— No idea. Doesn’t look familiar, — I replied."
        ],
        "choices": [
            {
                "text": "The Enforcer moved toward the stage, ignoring both Vi and the colleagues holding her back.",
                "nextScreen": 49,
                "variableAssignments": {}
            }
        ]
    },
    "49": {
        "dialogues": [
            "— Though we've suffered a terrible blow, I assure you: the rule of law prevails in Piltover. We will find those responsible. And they will account for their crimes, — Mel continued.",
            "The Enforcer reached the podium, and before anyone could react, he drew a gun. Steb darted toward the stage, and the 'Enforcer,' noticing him, struck Mel with the gun’s handle. Caught off guard, she crumpled to the floor.",
            "For a moment, everything froze. The crowd fell into a dead silence."
        ],
        "choices": [
            {
                "text": "The man raised his weapon, aiming it at the fallen Mel.",
                "nextScreen": 50,
                "variableAssignments": {}
            }
        ]
    },
    "50": {
        "dialogues": [
            "Then he abruptly aimed the weapon skyward and fired. A bright firework exploded into the air.",
            "— You aren't safe up here, toppers. None of you are safe! — he shouted, laughing maniacally.",
            "Shots erupted from the crowd — some into the air, others in random directions. Several people among the audience drew weapons as well."
        ],
        "choices": [
            {
                "text": "This was all premeditated.",
                "nextScreen": 51,
                "variableAssignments": {}
            }
        ]
    },
    "51": {
        "dialogues": [
            "Steb, already on the stage, tackled the 'Enforcer' with his full weight, pinning him to the ground."
        ],
        "choices": [
            {
                "text": "— Evacuate the Councilors! — Steb shouted, disarming the attacker.",
                "nextScreen": 52,
                "variableAssignments": {}
            }
        ]
    },
    "52": {
        "dialogues": [
            "Chaos consumed the crowd. Some tried to flee, others were fighting, and no one could tell who was friend or foe. The Enforcers struggled to restore order, but controlling the panicked masses was proving impossible.",
            "I spotted Councilor Shoola near the stage, standing frozen in fear and confusion. I rushed toward her and grabbed her by the shoulder."
        ],
        "choices": [
            {
                "text": "— Follow me, quickly! — I urged, pulling her toward the armored hexmobile parked at the edge of the square.",
                "nextScreen": 53,
                "variableAssignments": {}
            }
        ]
    },
    "53": {
        "dialogues": [
            "Other Enforcers, seeing me with the Councilor, began clearing a path through the chaos.",
            "— What’s happening? — Councilor Shoola asked in a trembling voice as I ushered her into the hexmobile — a large, armored van."
        ],
        "choices": [
            {
                "text": "— Everything is under control. Just stay here, — I said, opening the vehicle’s weapons compartment.",
                "nextScreen": 54,
                "variableAssignments": {}
            }
        ]
    },
    "54": {
        "dialogues": [
            "Without hesitation, I grabbed the first weapon I saw — a shotgun loaded with smoke grenades.",
            "At that moment, Steb appeared, helping Councilor Mel Medarda walk. With the assistance of a couple of Enforcers, he got her into the hexmobile alongside Shoola.",
            "— You’re driving. Get them out of here, — he ordered, slamming the rear doors shut despite the screams and sporadic gunfire echoing from the square."
        ],
        "choices": [
            {
                "text": "I slung the shotgun over my shoulder and jumped into the driver’s seat.",
                "nextScreen": 55,
                "variableAssignments": {}
            }
        ]
    },
    "55": {
        "dialogues": [
            "Steb banged on the cab, signaling he was ready, and climbed into the passenger seat.",
            "— Drive! — he commanded.",
            "I slammed my foot on the gas, and the vehicle surged forward. The streets around the square were overrun with Enforcers, civilians, and thugs from Zaun who had infiltrated the ceremony. The crowd was like a disturbed hive, people shoving one another in a frantic search for shelter, while fires broke out in the distance.",
            "— Keep calm, just drive, — Steb said, though he gripped the handle tightly, as if his life depended on it."
        ],
        "choices": [
            {
                "text": "Suddenly, an enormous impact hit the vehicle — like being rammed.",
                "nextScreen": 56,
                "variableAssignments": {}
            }
        ]
    },
    "56": {
        "dialogues": [
            "The vehicle spun out, its front slamming into a wall with a deafening crash. I hit my head against the steering wheel, and the engine roared before sputtering out.",
            "— Maddie! — My ears were ringing, but Steb’s voice cut through the noise.",
            "— I... I’m okay! — I croaked, quickly trying to assess the damage."
        ],
        "choices": [
            {
                "text": "Only a few scratches and bruises on my face — luck was on my side.",
                "nextScreen": 57,
                "variableAssignments": {}
            }
        ]
    },
    "57": {
        "dialogues": [
            "— What the... what is that? — Steb muttered.",
            "A massive creature stepped toward the vehicle. It had clearly been the one to knock us over. Towering and nightmarish, with metal limbs and hextech enhancers, it was the size of a small single-story building. It appeared to be piloted by someone sitting in a cockpit built into what could only be described as the creature’s 'head.' It moved closer, each step causing the ground to tremble and sending small shockwaves rippling through the earth.",
            "— Stay still. Don’t move, — Steb ordered, pressing himself back into his seat. But his words didn’t help."
        ],
        "choices": [
            {
                "text": "The creature ripped the door off with a single motion, grabbed my leg, and yanked me out.",
                "nextScreen": 58,
                "variableAssignments": {}
            }
        ]
    },
    "58": {
        "dialogues": [
            "— Let me go! — I screamed, kicking as it lifted me into the air.",
            "The beast held me like a rag doll. My helmet slipped off, and cold air mixed with the acrid smell of soot hit my face. I struggled, but the creature's grip was unyielding."
        ],
        "choices": [
            {
                "text": "The shotgun! It was still slung over my shoulder.",
                "nextScreen": 59,
                "variableAssignments": {}
            }
        ]
    },
    "59": {
        "dialogues": [
            "I reached for it, trying to pull it free, but the creature jerked me around like a toy dangling from its massive metal claw.",
            "The shotgun slipped from my grasp. The strap snapped, and the weapon hit the ground with a dull thud."
        ],
        "choices": [
            {
                "text": "— No, no, no! — I hissed, helplessly thrashing in the air, hanging upside down.",
                "nextScreen": 60,
                "variableAssignments": {}
            }
        ]
    },
    "60": {
        "dialogues": [
            "And then I saw Steb dart out from behind the hexmobile. In his hands was a fire axe — standard issue in every hexmobile for emergencies.",
            "Without a word, he charged forward and struck the creature's leg. Sparks flew from the impact, and the beast, turning its focus to Steb, flung me aside.",
            "I tumbled several meters before landing near the stage, rolling a few times. My uniform was shredded, and my body throbbed with a deep, pulsing pain."
        ],
        "choices": [
            {
                "text": "But I was alive and conscious.",
                "nextScreen": 61,
                "variableAssignments": {}
            }
        ]
    },
    "61": {
        "dialogues": [
            "— Come on, you hunk of junk! — Steb yelled, striking the creature’s leg again. The axe embedded itself deep into the metal, sending another shower of sparks.",
            "Steb tried to pull the axe free, but it was stuck, caught on something deep inside. Abandoning the weapon, Steb turned and ran.",
            "But there was nowhere to go."
        ],
        "choices": [
            {
                "text": "Reaching my position, he found himself cornered between the stage, the creature, and the hexmobile.",
                "nextScreen": 62,
                "variableAssignments": {}
            }
        ]
    },
    "62": {
        "dialogues": [
            "The creature froze for a moment, as though calculating its next move against Steb, then raised its massive arm to strike."
        ],
        "choices": [
            {
                "text": "And then Loris appeared.",
                "nextScreen": 63,
                "variableAssignments": {}
            }
        ]
    },
    "63": {
        "dialogues": [
            "In his hands was a thick, curved piece of metal — likely part of the hexmobile’s hood or a panel.",
            "With surprising strength, Loris slammed the makeshift shield into the creature’s arm, deflecting its attack and shielding himself, Steb, and me as I struggled to recover from my fall.",
            "Loris stood firm, like an unyielding fortress, but it was clear he wouldn’t be able to hold off the creature for long. It rained blow after blow on the 'shield,' forcing us closer to the stage."
        ],
        "choices": [
            {
                "text": "At that moment, Caitlyn joined the fight.",
                "nextScreen": 64,
                "variableAssignments": {}
            }
        ]
    },
    "64": {
        "dialogues": [
            "She appeared on the stage behind us, rifle at the ready. Without a word, she aimed and fired, the first shot striking the cockpit. The creature staggered but didn’t fall. Caitlyn swiftly chambered another round and fired again. This time, the bullet pierced one of the tubes on its body. A strange liquid began to leak, and violet smoke hissed out, swirling into the air like a toxic cloud.",
            "The creature paused momentarily, as if its systems were malfunctioning. Loris seized the opportunity, raising the metal plate once more to shield us from any potential attack."
        ],
        "choices": [
            {
                "text": "— Hold on! — Caitlyn shouted, before leaping off the stage toward us.",
                "nextScreen": 65,
                "variableAssignments": {}
            }
        ]
    },
    "65": {
        "dialogues": [
            "Her movements were precise and fluid, like a trained professional who knew exactly what she was doing. She landed next to me, bending her knees slightly to absorb the impact.",
            "Something at her feet caught my attention. My shotgun. It was lying on the ground near Caitlyn, and I wasted no time diving for it.",
            "— Finally! — I exhaled, gripping the weapon tightly."
        ],
        "choices": [
            {
                "text": "At least I had something.",
                "nextScreen": 66,
                "variableAssignments": {}
            }
        ]
    },
    "66": {
        "dialogues": [
            "The violet smoke from the damaged tube began to fill the area. To our horror, figures began emerging from the mist. They were smaller than the creature but still menacing. Standing roughly the height of a person, their hextech-enhanced limbs moved quickly, and they resembled metallic predators."
        ],
        "choices": [
            {
                "text": "— More guests, — Steb muttered through clenched teeth.",
                "nextScreen": 67,
                "variableAssignments": {}
            }
        ]
    },
    "67": {
        "dialogues": [
            "We stood back-to-back: Caitlyn kept her rifle trained on the largest creature, Loris used the metal plate to shield us all, I held my position on the flank with the shotgun, and Steb, armed with nothing but his standard-issue baton, was ready to fight anything — even that massive beast if it came to it.",
            "Loris remained silent as always. He noticed the giant, despite being weakened by Caitlyn’s shots, beginning to move again. Without hesitation, Loris positioned the shield in front of Caitlyn.",
            "— Got a plan? — I asked, glancing toward Caitlyn."
        ],
        "choices": [
            {
                "text": "— Survive, — she replied curtly, firing another shot.",
                "nextScreen": 68,
                "variableAssignments": {}
            }
        ]
    },
    "68": {
        "dialogues": [
            "We were outnumbered. The odds were stacked against us. The massive creature resumed pounding against Loris’s shield, and Caitlyn’s shots seemed to have little effect."
        ],
        "choices": [
            {
                "text": "But surrender was not an option.",
                "nextScreen": 69,
                "variableAssignments": {}
            }
        ]
    },
    "69": {
        "dialogues": [
            "Loris was struggling to hold the line. Each of Caitlyn’s shots hit its mark, but the smaller creatures were closing in."
        ],
        "choices": [
            {
                "text": "Suddenly, a sharp whistle cut through the air.",
                "nextScreen": 70,
                "variableAssignments": {}
            }
        ]
    },
    "70": {
        "dialogues": [
            "From somewhere through the smoke, a spear hurtled toward the giant. It was massive, with a long blade shaped like a predator’s wing.",
            "The spear drove through the giant’s 'head,' impaling it completely."
        ],
        "choices": [
            {
                "text": "The creature froze, seemingly confused, before crashing to the ground in front of us with a thunderous impact.",
                "nextScreen": 71,
                "variableAssignments": {}
            }
        ]
    },
    "71": {
        "dialogues": [
            "At the same moment, a blue beam burst from behind us, near the stage — a powerful hextech energy blast. It seemed aimed at the giant, but the creature was already falling, struck down by the spear. The energy blast missed, slamming into something far beyond the square."
        ],
        "choices": [
            {
                "text": "The ground trembled, and I struggled to stay on my feet.",
                "nextScreen": 72,
                "variableAssignments": {}
            }
        ]
    },
    "72": {
        "dialogues": [
            "It all happened in seconds. Another spear sliced through the smoke, skewering one of the smaller creatures. Then another, and another — each landing with precision, as if thrown by trained assassins. One by one, the creatures fell, until silence reigned, broken only by the crackling and sparking of damaged machinery.",
            "We froze, staring at the fallen giant in front of us. Thick violet smoke continued to pour from it, swirling ominously around the battlefield."
        ],
        "choices": [
            {
                "text": "Through the smoke, silhouettes began to emerge.",
                "nextScreen": 73,
                "variableAssignments": {}
            }
        ]
    },
    "73": {
        "dialogues": [
            "As the smoke cleared, I could see them: tall, imposing figures clad in red metallic armor with helmets that completely obscured their faces. Each one carried a shield and a short sword. Among them stood a towering man, even larger than Loris, with a thick black beard and a mohawk-like crest.",
            "I caught my breath, trying to comprehend who had saved us, until I saw her standing behind the giant warrior."
        ],
        "choices": [
            {
                "text": "Ambessa Medarda.",
                "nextScreen": 74,
                "variableAssignments": {}
            }
        ]
    },
    "74": {
        "dialogues": [
            "Like her soldiers, she wore a helmet, her face concealed like a mask. But unlike theirs, Ambessa Medarda’s mask was adorned with intricate engravings and the unmistakable insignias of her house.",
            "In one hand, she held a long dagger, its blade slick with fresh blood. Without hesitation, she slit the throat of a bandit who had been trying to surrender or flee.",
            "— Now that’s what a real army looks like, — Steb muttered."
        ],
        "choices": [
            {
                "text": "Ambessa didn’t say a word, but her presence spoke volumes.",
                "nextScreen": 75,
                "variableAssignments": {}
            }
        ]
    },
    "75": {
        "dialogues": [
            "call FadeScene 76"
        ],
        "choices": []
    },
    "76": {
        "dialogues": [
            "The smoke was finally starting to clear, revealing a scene more fitting of a battlefield than Piltover’s central square. The stage was in ruins, hextech devices lay shattered, and the remains of mechanical creatures littered the ground. Noxian warriors methodically retrieved their spears from the wreckage. Cries of survivors and the sound of sobbing could be heard. One Enforcer was carrying a young girl, no older than six or seven, out of the chaos at the center of it all.",
            "Ambessa Medarda stood near the stage, her mask removed and hanging from her forearm. She was speaking calmly but with tension to the bearded Noxian warrior."
        ],
        "choices": [
            {
                "text": "On the wrecked stage, I spotted Jayce.",
                "nextScreen": 77,
                "variableAssignments": {}
            }
        ]
    },
    "77": {
        "dialogues": [
            "Injured, he was being supported by two Enforcers. His hextech hammer lay nearby, faint traces of bluish energy still clinging to it. The fabric of his jacket was torn across the chest, and his shoulder was wrapped in a bloodied bandage. I would later learn that the blue beam which had missed the giant was fired from his experimental weapon, designed for mass destruction. However, it was Vi who had used it. Jayce had been attacked by one of the Zaunites, and Vi had stepped in, taking control of the device to salvage the situation."
        ],
        "choices": [
            {
                "text": "Steb and I were inside one of the temporary tents the Enforcers had set up in the square for first aid.",
                "nextScreen": 78,
                "variableAssignments": {}
            }
        ]
    },
    "78": {
        "dialogues": [
            "The tent was cramped: folding chairs, crates filled with bandages and medical supplies. Caitlyn sat on a chair across from Steb. She was still a bit pale but was trying her best to maintain the composure befitting the heir to the Kiramman family.",
            "— Look at me, — Steb said quietly, holding a flashlight and directing it at her eyes. — Checking your pupil response.",
            "Caitlyn obediently followed the light. Her face remained calm, but I noticed her hands were still trembling."
        ],
        "choices": [
            {
                "text": "— Everything okay? — I asked, watching Steb work.",
                "nextScreen": 79,
                "variableAssignments": {}
            }
        ]
    },
    "79": {
        "dialogues": [
            "— No irregularities, — he replied, putting the flashlight away. — Pupil reaction is normal.",
            "Caitlyn gave a short nod, though her gaze was fixed on the tent’s open entrance, where Enforcers were still bustling about. At that moment, Vi appeared. Her red hair was disheveled, and her face bore marks of soot and dried blood. Her eyes immediately sought out Caitlyn.",
            "I exchanged a glance with Steb, who nodded as if understanding without words."
        ],
        "choices": [
            {
                "text": "— Rest up, Sheriff Kiramman. You’ve got... company now, — I said.",
                "nextScreen": 80,
                "variableAssignments": {}
            }
        ]
    },
    "80": {
        "dialogues": [
            "Steb followed me as we left the tent, leaving them alone. Vi stepped inside, and I caught a glimpse of Caitlyn smiling.",
            "Steb and I moved to the edge of the square, where the smoke had almost dissipated, though the acrid smell of burning, soot, and fresh blood still lingered.",
            "— Still, — Steb said, looking at the Noxians, — They saved Piltover.",
            "I silently watched as Ambessa, having finished her conversation with the towering warrior, directed her troops. On one hand, I was grateful for her intervention."
        ],
        "choices": [
            {
                "text": "But on the other hand, I couldn’t shake the thought that Noxian help always comes with a price.",
                "nextScreen": 81,
                "variableAssignments": {}
            }
        ]
    },
    "81": {
        "dialogues": [
            "call FadeScene 82"
        ],
        "choices": []
    },
    "82": {
        "dialogues": [
            "Steb and I walked across the square, taking in the destruction left by the Zaunites. The battle was over, but the adrenaline hadn’t worn off: my heart was still racing, and my hands were trembling. Everything felt like a nightmare that refused to end."
        ],
        "choices": [
            {
                "text": "Among the wreckage of the stage, I spotted Loris.",
                "nextScreen": 83,
                "variableAssignments": {}
            }
        ]
    },
    "83": {
        "dialogues": [
            "He was sitting on a broken column, leaning against a still-smoldering metal support. His shoulders were slumped, his face streaked with sweat and grime. He wasn’t doing anything, just staring off into the distance. I noticed him first and nudged Steb with my elbow, nodding in his direction. Together, we approached."
        ],
        "choices": [
            {
                "text": "— How are you?",
                "nextScreen": 84,
                "variableAssignments": {}
            },
            {
                "text": "— Thanks for helping us back there. Are you okay?",
                "nextScreen": 84,
                "variableAssignments": {}
            }
        ]
    },
    "84": {
        "dialogues": [
            "— Alive, — he muttered grimly.",
            "— We can see that, — Steb said, sitting down beside him. — But how are you, really?",
            "— Not sure.",
            "— You saved our lives, — Steb continued, though I could tell the words didn’t come easily for him."
        ],
        "choices": [
            {
                "text": "Loris nodded.",
                "nextScreen": 85,
                "variableAssignments": {}
            }
        ]
    },
    "85": {
        "dialogues": [
            "Steb stayed quiet, unsure how to proceed. Then, with a deep breath, he finally spoke:",
            "— Listen, I know we’ve had... history. I know that report, back then, must have felt like...",
            "Loris cut him off:",
            "— Forget it. It’s in the past. You’re alive, I’m alive, your... partner is alive. That’s what matters."
        ],
        "choices": [
            {
                "text": "— I’m Maddie, — I interjected.",
                "nextScreen": 86,
                "variableAssignments": {}
            },
            {
                "text": "I decided not to interrupt their conversation.",
                "nextScreen": 114,
                "variableAssignments": {}
            }
        ]
    },
    "86": {
        "dialogues": [
            "— Loris. Former detective. Used to be Steb’s partner. I’m guessing you’ve already heard stories about me — not the flattering kind.",
            "He fell silent again, his expression stern. Then Loris slowly got to his feet. Steb and I both noticed his gaze settle on a scorched piece of metal he had used as a shield. It lay nearby, bent and covered in deep gashes."
        ],
        "choices": [
            {
                "text": "— That shield... What is it, exactly? — I asked softly, breaking the silence.",
                "nextScreen": 87,
                "variableAssignments": {}
            }
        ]
    },
    "87": {
        "dialogues": [
            "— A shield, — he said with a faint chuckle. — Honestly, I don’t know what it is. Just a piece of metal. It was the first thing I grabbed."
        ],
        "choices": [
            {
                "text": "— That piece of metal saved us.",
                "nextScreen": 88,
                "variableAssignments": {}
            },
            {
                "text": "— You used it like it was a real shield.",
                "nextScreen": 88,
                "variableAssignments": {}
            }
        ]
    },
    "88": {
        "dialogues": [
            "— It’s just a chunk of metal, — he repeated, shaking his head slightly. — Don’t try to find any meaning in it.",
            "An awkward silence settled between us. The conversation wasn’t flowing.",
            "Suddenly, one of the Enforcers called for Steb. An officer was waving him over, clearly needing to talk urgently.",
            "Steb nodded at us and left. I was left alone with Loris."
        ],
        "choices": [
            {
                "text": "— Maybe Caitlyn will reinstate you... You saved her too.",
                "nextScreen": 89,
                "variableAssignments": {}
            }
        ]
    },
    "89": {
        "dialogues": [
            "— After today, — he said with a bitter smirk, — She probably will.",
            "— You say that like it’s a bad thing.",
            "— It’s not bad. It’s pointless. The worst is yet to come, and I’m not sure we can handle it."
        ],
        "choices": [
            {
                "text": "— You mean the Zaunite thugs? Sure, they’ve gone mad, but Piltover is far stronger.",
                "nextScreen": 90,
                "variableAssignments": {}
            },
            {
                "text": "— What do you mean?",
                "nextScreen": 90,
                "variableAssignments": {}
            }
        ]
    },
    "90": {
        "dialogues": [
            "— I mean them, — Loris nodded toward the Noxians. — They never do anything without a reason. Today they helped. Tomorrow...",
            "He looked at me as if gauging my reaction, and at that moment, I heard my name:"
        ],
        "choices": [
            {
                "text": "— Maddie! — someone called from behind me.",
                "nextScreen": 91,
                "variableAssignments": {}
            }
        ]
    },
    "91": {
        "dialogues": [
            "I turned and saw Gabriella, my cousin. She was striding over, waving her arms and wobbling in an oversized firefighter’s uniform.",
            "— Oh no, no, no... — I muttered, already bracing myself for what was coming.",
            "— I knew I’d find you here! — she shouted, throwing her arms around me. — Look at this mess! It’s like a hurricane hit, but worse. I never imagined it could be this bad!"
        ],
        "choices": [
            {
                "text": "— Gabi, — I said, trying to wriggle out of her tight embrace, — What are you doing here?",
                "nextScreen": 92,
                "variableAssignments": {}
            }
        ]
    },
    "92": {
        "dialogues": [
            "— Oh, come on! — she stepped back, dramatically flicking her hair, which immediately fell back into her face. — Firefighters and rescue crews from every station in Piltover are here. Even us, the public information officers, were called in. They said they needed all hands on deck. So I thought, ‘Why not come and help?’",
            "She finally noticed Loris, who was watching her with an expressionless face, and froze.",
            "— Who’s that? — she whispered to me."
        ],
        "choices": [
            {
                "text": "— Loris. He’s with the Enforcers.",
                "nextScreen": 113,
                "variableAssignments": {}
            },
            {
                "text": "— That’s Loris. He saved my life.",
                "nextScreen": 93,
                "variableAssignments": {}
            }
        ]
    },
    "93": {
        "dialogues": [
            "— Oh wow! — she exclaimed. — Then thank you! You’re a hero, you know that?",
            "Loris didn’t respond, only shook his head slightly and lowered his gaze back to the 'shield.' Gabi, unfazed, kept going.",
            "— Thank you again, — I said to Loris before Gabi could continue. He gave a curt nod, and I steered my cousin away by her shoulder."
        ],
        "choices": [
            {
                "text": "Gabi walked beside me, bouncing with every step like an overexcited puppy.",
                "nextScreen": 94,
                "variableAssignments": {}
            }
        ]
    },
    "94": {
        "dialogues": [
            "— Okay, spill! — she began, looking me over from head to toe. — Where’s your helmet? Why are you covered in scrapes? And why’s your uniform torn? Were you fighting one of those... what are they? Mechanical monsters?",
            "I sighed, picking up my pace in the hope of escaping her endless stream of questions, but Gabi easily kept up."
        ],
        "choices": [
            {
                "text": "— My helmet came off when one of those things threw me into the air. And then it tossed me to the ground.",
                "nextScreen": 95,
                "variableAssignments": {}
            }
        ]
    },
    "95": {
        "dialogues": [
            "— No way! — she gasped, grabbing my arm and stopping me. — It picked you up?! How? With hands? Claws? Or were they, like, tentacles? And how did you even... never mind! The important thing is you’re okay!",
            "She scanned me again, clearly expecting me to say more."
        ],
        "choices": [
            {
                "text": "But I stayed silent.",
                "nextScreen": 96,
                "variableAssignments": {}
            },
            {
                "text": "— Gabi, I’ll answer your questions, but please, one at a time.",
                "nextScreen": 111,
                "variableAssignments": {}
            }
        ]
    },
    "96": {
        "dialogues": [
            "— That’s... that’s so cool! — she burst out, unable to bear the silence. — I mean, not cool that you got tossed around, but cool that you’re, like... so cool! And alive!"
        ],
        "choices": [
            {
                "text": "— Thanks, Gabi.",
                "nextScreen": 110,
                "variableAssignments": {}
            },
            {
                "text": "— You know, Gabi, sometimes you talk way too much and way too fast...",
                "nextScreen": 97,
                "variableAssignments": {}
            }
        ]
    },
    "97": {
        "dialogues": [
            "— That’s my talent, — she said, raising her chin proudly. — But I’m right. You’re amazing. And I want to know everything! Who else was there? I know it was some ceremony, but were you fighting those things alone? Didn’t the other Enforcers help? What about Sheriff Kiramman? Cass... Caitlyn Kiramman, has she said anything about what happened yet? Oh, and also..."
        ],
        "choices": [
            {
                "text": "— Hey, firefighter, — came a low, gruff voice.",
                "nextScreen": 98,
                "variableAssignments": {}
            }
        ]
    },
    "98": {
        "dialogues": [
            "We both turned to see the towering, bearded bruiser from Ambessa’s squad.",
            "— You, — he pointed at Gabi. — Help needed. Come with me.",
            "— Me?! — Gabi pointed at herself, blinking rapidly. — What? Why me?"
        ],
        "choices": [
            {
                "text": "— You’re a firefighter, — he repeated, not bothering to explain further. — You know how to handle water. Let’s go.",
                "nextScreen": 99,
                "variableAssignments": {}
            }
        ]
    },
    "99": {
        "dialogues": [
            "He turned and walked away without looking back. Gabi threw me a bewildered glance.",
            "— Is this a joke? I’m not... I mean, I’m just...",
            "— Go, — I nudged her forward. — You came here to help, so help.",
            "— I... okay, fine, — she muttered, nervously adjusting her oversized gear. She hesitated for a few more seconds, then jogged after the bruiser."
        ],
        "choices": [
            {
                "text": "I glanced toward the stage, but Loris was nowhere to be seen. Neither was Steb.",
                "nextScreen": 100,
                "variableAssignments": {}
            }
        ]
    },
    "100": {
        "dialogues": [
            "The entire day felt like an endless series of chaotic events, and now, left on my own, I suddenly felt exhaustion crash over me. For the first time, I noticed how much my body ached, especially my left side where I’d landed when that creature threw me. It felt like this day had drained every ounce of strength I had — both physically and emotionally.",
            "The thought flickered in my mind that maybe, just maybe, I deserved a moment of peace. A shower and clean clothes suddenly became the most appealing things in the world. I figured I’d earned at least a few minutes to collect myself."
        ],
        "choices": [
            {
                "text": "I headed toward the tents to find Caitlyn and ask for leave, but I heard soft laughter.",
                "nextScreen": 101,
                "variableAssignments": {}
            }
        ]
    },
    "101": {
        "dialogues": [
            "It was Caitlyn’s laughter, coming from one of the tents. It caught me off guard. Sheriff Kiramman was a strict, composed, serious person. Hearing her laugh — especially at a time like this — felt almost surreal."
        ],
        "choices": [
            {
                "text": "I cautiously peeked inside.",
                "nextScreen": 102,
                "variableAssignments": {
                    "c5": 0
                }
            },
            {
                "text": "I decided not to disturb Caitlyn.",
                "nextScreen": 104,
                "variableAssignments": {
                    "c5": 1
                }
            }
        ]
    },
    "102": {
        "dialogues": [
            "Caitlyn was seated at a table, leaning back in her chair, visibly relaxed. Vi stood opposite her, leaning casually against the table, arms crossed and a mischievous grin on her face. Caitlyn started saying something, but before she could finish, Vi leaned in closer and pulled her into a kiss. It was sharp, passionate, and filled with a restrained energy that had finally broken free.",
            "For once, it seemed like the Sheriff had left all her burdens behind."
        ],
        "choices": [
            {
                "text": "The moment was so quiet and intimate that I didn’t dare interrupt.",
                "nextScreen": 103,
                "variableAssignments": {}
            }
        ]
    },
    "103": {
        "dialogues": [
            "I bit my lip and backed away to avoid breaking the fragile moment. If anyone deserved a little happiness today, it was Caitlyn.",
            "— Maddie? — a voice came from behind, and I turned sharply. It was Steb, standing in his usual relaxed posture, holding a disposable cup with the remnants of coffee. — What are you doing here? Spying on the Sheriff?"
        ],
        "choices": [
            {
                "text": "— I... uh... no, — I quickly collected my thoughts and smiled.",
                "nextScreen": 105,
                "variableAssignments": {}
            },
            {
                "text": "Yes, I’m spying on Caitlyn Kiramman. Got any more questions?",
                "nextScreen": 108,
                "variableAssignments": {}
            }
        ]
    },
    "104": {
        "dialogues": [
            "I chose not to go in and stepped back. If anyone deserved a little happiness today, it was Caitlyn.",
            "— Maddie? — a voice came from behind, and I turned sharply. It was Steb, standing in his usual relaxed posture, holding a disposable cup with the remnants of coffee. — What are you doing here? Spying on the Sheriff?"
        ],
        "choices": [
            {
                "text": "— I... uh... no, — I quickly collected my thoughts and smiled.",
                "nextScreen": 105,
                "variableAssignments": {}
            },
            {
                "text": "Yes, I’m spying on Caitlyn Kiramman. Got any more questions?",
                "nextScreen": 108,
                "variableAssignments": {}
            }
        ]
    },
    "105": {
        "dialogues": [
            "— I just wanted to ask for a short leave to clean up and change. I look like... like a disaster.",
            "Steb snorted, giving my torn uniform a once-over.",
            "— A disaster among disasters, — he agreed. — Good thing there aren’t any mirrors here. You’d be horrified by your reflection."
        ],
        "choices": [
            {
                "text": "— You’re not exactly looking your best either.",
                "nextScreen": 106,
                "variableAssignments": {}
            },
            {
                "text": "— I can imagine I look terrible.",
                "nextScreen": 106,
                "variableAssignments": {}
            }
        ]
    },
    "106": {
        "dialogues": [
            "He smirked again, took a sip of his coffee, and gestured with his head:",
            "— All right, go ahead, Junior Officer Nolen. I’ll let the Sergeant know.",
            "I nodded, feeling a bit of the tension lift from my shoulders:",
            "— Thanks."
        ],
        "choices": [
            {
                "text": "— And one more thing... — he added.",
                "nextScreen": 107,
                "variableAssignments": {}
            }
        ]
    },
    "107": {
        "dialogues": [
            "— You did good today. Really good.",
            "I thanked Steb for his words, and we parted ways.",
            "As I passed by the tent where Caitlyn and Vi were laughing, I paused again for a moment. Part of me wanted to step in and say something. But another part... just smiled to myself and kept walking."
        ],
        "choices": [
            {
                "text": "The day was gradually coming to an end, and all I could think about was a hot shower and clean clothes.",
                "nextScreen": 125,
                "variableAssignments": {}
            }
        ]
    },
    "108": {
        "dialogues": [
            "Steb laughed:",
            "— Maddie Nolen, the spy! All right, spill it — what are you doing here?"
        ],
        "choices": [
            {
                "text": "— I just wanted to ask for a short leave to clean up and change. I look like... like a disaster.",
                "nextScreen": 109,
                "variableAssignments": {}
            }
        ]
    },
    "109": {
        "dialogues": [
            "Steb snorted, giving my torn uniform a quick glance.",
            "— A disaster of disasters, — he agreed. — Good thing there aren’t any mirrors here. Otherwise, you’d be horrified by your own reflection."
        ],
        "choices": [
            {
                "text": "— You’re not exactly looking your best either.",
                "nextScreen": 106,
                "variableAssignments": {}
            },
            {
                "text": "— I can imagine I look terrible.",
                "nextScreen": 106,
                "variableAssignments": {}
            }
        ]
    },
    "110": {
        "dialogues": [
            "— No need to thank me — you’re seriously so cool! I want to know everything! Who else was there? I know it was some ceremony, but were you fighting those things alone? Didn’t the other Enforcers help? And Sheriff Kiramman? Cass... Caitlyn Kiramman — has she said anything about what happened yet? Oh, and also..."
        ],
        "choices": [
            {
                "text": "— Hey, firefighter, — came a low, gruff voice.",
                "nextScreen": 98,
                "variableAssignments": {}
            }
        ]
    },
    "111": {
        "dialogues": [
            "Her eyes sparkled with curiosity, and I knew the flood of questions wouldn’t stop unless I answered at least some of them.",
            "— It grabbed me with its hands, — I started, keeping it brief. — Well, if you could call them hands. The creature had these... metallic limbs. It grabbed my leg and...",
            "— Metallic limbs? — Gabi interrupted, eyes wide. — Like a machine? Or more like a crane? Were you fighting a giant crane?!",
            "— No! — I sighed, trying to keep my patience. — It was a beast. Huge, made of hextech and mechanics. And it was controlled by..."
        ],
        "choices": [
            {
                "text": "— Hextech! — Gabi raised a finger as if she’d just uncovered a great mystery.",
                "nextScreen": 112,
                "variableAssignments": {}
            }
        ]
    },
    "112": {
        "dialogues": [
            "— I love hextech... And it threw you? — she pressed on, leaning closer. The details seemed more important to her than anything. — Hard? How far? Did you land like in the movies? Like this! — she jumped in place, spreading her arms dramatically.",
            "— Gabi, let’s just say it wasn’t a soft landing. I hit the ground hard, got up, and... That’s it. End of story."
        ],
        "choices": [
            {
                "text": "— Hey, firefighter, — came a low, gruff voice.",
                "nextScreen": 98,
                "variableAssignments": {}
            }
        ]
    },
    "113": {
        "dialogues": [
            "— Wow! — she exclaimed. — Doesn’t look it, though. No uniform, no weapons... Even I have my gear!",
            "Gabi gestured to her oversized firefighter’s jacket.",
            "Loris didn’t respond, just shook his head slightly and lowered his gaze back to the 'shield.'",
            "— Thank you again, — I said to Loris before Gabi could add anything else. He gave a curt nod, and I steered my cousin away by the shoulder."
        ],
        "choices": [
            {
                "text": "Gabi walked beside me, bouncing with every step like an overexcited puppy.",
                "nextScreen": 94,
                "variableAssignments": {}
            }
        ]
    },
    "114": {
        "dialogues": [
            "Loris slowly rose to his feet. Steb and I both noticed his gaze fixate on the scorched piece of metal he’d used as a shield. It lay nearby, bent and slashed from the battle."
        ],
        "choices": [
            {
                "text": "— That shield... What is it, exactly? — I asked softly, breaking the silence.",
                "nextScreen": 87,
                "variableAssignments": {}
            }
        ]
    },
    "115": {
        "dialogues": [
            "— Something suspicious is going on over there. I’m going to check it out, — I whispered to Steb.",
            "— Leaving me on post alone? Fine, but make it quick, or the Sergeant will have your head.",
            "On the stage, Mel was still delivering her speech. Her voice, as always, was steady and calm:",
            "— We commissioned this statue, so we can remember them for their countless contributions, their lifetimes of service, not the cravent act that stole them away."
        ],
        "choices": [
            {
                "text": "At that moment, Vi stopped abruptly and turned sharply toward the stage.",
                "nextScreen": 116,
                "variableAssignments": {}
            }
        ]
    },
    "116": {
        "dialogues": [
            "She attempted to vault over the barrier separating the stage from the crowd, but the nearby Enforcers immediately reacted and grabbed her.",
            "I quickly approached them and asked:"
        ],
        "choices": [
            {
                "text": "— Vi, what are you doing?",
                "nextScreen": 117,
                "variableAssignments": {}
            },
            {
                "text": "— Do you even realize who you’ve grabbed?",
                "nextScreen": 117,
                "variableAssignments": {}
            }
        ]
    },
    "117": {
        "dialogues": [
            "Vi, hearing my voice, momentarily stopped resisting and looked in my direction:",
            "— Officer Nolen! Mel Medarda is in danger. That guy — he’s not an Enforcer.",
            "She nodded toward the stage. I and the other Enforcers turned to see a man climbing up the service stairs leading to the stage."
        ],
        "choices": [
            {
                "text": "He was dressed in an Enforcer uniform, but I’d never seen him before.",
                "nextScreen": 118,
                "variableAssignments": {}
            }
        ]
    },
    "118": {
        "dialogues": [
            "He ascended with a smirk on his unpleasant face, a large tattoo prominently displayed on his neck.",
            "— Though we've suffered a terrible blow, I assure you: the rule of law prevails in Piltover, — Mel continued. — We will find those responsible. And they will account for their crimes.",
            "The man in the Enforcer uniform reached for the handle of a pistol holstered at his side."
        ],
        "choices": [
            {
                "text": "Stay with Vi and the Enforcers.",
                "nextScreen": 123,
                "variableAssignments": {
                    "c4": 0
                }
            },
            {
                "text": "Try to save Mel.",
                "nextScreen": 119,
                "variableAssignments": {
                    "c4": 1
                }
            }
        ]
    },
    "119": {
        "dialogues": [
            "I immediately rushed toward the stage. The 'Enforcer' noticed me, briefly glancing my way, then pulled out his pistol and struck Mel on the head with the handle.",
            "Caught off guard, Mel collapsed to the floor.",
            "For a moment, everything froze. The crowd was dead silent."
        ],
        "choices": [
            {
                "text": "The man raised the pistol and aimed it at the fallen Mel.",
                "nextScreen": 120,
                "variableAssignments": {}
            }
        ]
    },
    "120": {
        "dialogues": [
            "Then, suddenly, he pointed the weapon upward and fired. A bright burst of fireworks exploded in the sky.",
            "— You aren't safe up here, toppers. None of you are safe! — he shouted, laughing maniacally.",
            "Gunshots erupted from the crowd — in the air, in random directions. Several people among the spectators pulled out weapons as well."
        ],
        "choices": [
            {
                "text": "This was all premeditated.",
                "nextScreen": 121,
                "variableAssignments": {}
            }
        ]
    },
    "121": {
        "dialogues": [
            "After his shot, I was already near the podium, charging at him like a battering ram. He didn’t flinch, defend himself, or try to escape. Perhaps he thought I couldn’t stop him, or maybe he was just distracting the Enforcers while his accomplices worked in the crowd.",
            "At full speed, I tackled him. We both fell to the floor near Mel, and I, straddling him, knocked the weapon from his hand."
        ],
        "choices": [
            {
                "text": "— Evacuate the councilors! — Steb shouted, already on stage and helping Mel back to her feet.",
                "nextScreen": 122,
                "variableAssignments": {}
            }
        ]
    },
    "122": {
        "dialogues": [
            "— I’ve got this one. Focus on the councilors, — I heard the Sergeant’s voice close to my ear.",
            "He and several other officers had also made it to the stage. One of them quickly cuffed the 'Enforcer,' and I finally climbed off him.",
            "Chaos reigned in the crowd. Some people were trying to escape, others were fighting, and no one could tell friend from foe. The Enforcers were doing their best to regain control, but managing a panicked crowd was proving impossible. I spotted Councilor Shoola near the stage in the front row. She looked terrified and confused about what was happening. I ran to her and grabbed her by the shoulder."
        ],
        "choices": [
            {
                "text": "— Come with me, quickly! — I said, pulling her toward a hexmobile stationed at the edge of the square.",
                "nextScreen": 53,
                "variableAssignments": {}
            }
        ]
    },
    "123": {
        "dialogues": [
            "The 'Enforcer' reached the podium, and before anyone could react, pulled out a pistol. Steb moved toward the stage in a flash, and the 'Enforcer,' noticing him, struck Mel on the head with the handle of the gun. Taken by surprise, she collapsed to the floor. For a moment, everything froze. The crowd was dead silent."
        ],
        "choices": [
            {
                "text": "The man raised the pistol and aimed it at the fallen Mel.",
                "nextScreen": 50,
                "variableAssignments": {}
            }
        ]
    },
    "124": {
        "dialogues": [
            "Steb and I sat at a small table in the corner. The day was in full swing, and the market outside the window was buzzing with life, as though it were a living organism itself. The narrow paths between the stalls were packed with people. Some leisurely examined fruits and vegetables, checking their ripeness, while others argued animatedly with vendors over prices, gesturing wildly."
        ],
        "choices": [
            {
                "text": "The door to the café opened, and Gabi appeared in the doorway.",
                "nextScreen": 13,
                "variableAssignments": {}
            }
        ]
    },
    "125": {
        "dialogues": [
            "call FadeScene null"
        ],
        "choices": []
    }
};