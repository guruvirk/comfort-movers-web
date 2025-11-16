const reviews = [
  [
    {
      name: 'Nivisha Arora',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKfiiQ7csxQScoBTHnyN2L-9LC7xXfpfnVPPOJ924D7_0wgUQ=w72-h72-p-rp-mo-ba3-br100',
      review:
        'Such amazing service from these guys!! Swift, polite, efficient, careful and just everything one can ask for from a move. I was very impressed. Such smooth service from the get go - quoting to job completion. I would completely recommend …',
      rating: 5,
    },
    {
      name: 'Tim Swain',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWdLx5twpZn0PHJHYK-UwZQy1ObcTzsh92Ge1oW_VeU5PPZ997S=w72-h72-p-rp-mo-br100',
      review: 'We engaged Simran and Comfort Movers to relocate our 3/4 bedroom home from Porirua to Tauranga. …',
      rating: 5,
    },
    {
      name: 'Amrutha',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWHngj7UVFxJKJJMifDDC3ybXnCnfLlH6WCwX4JK-zjfVY7WKYj=w72-h72-p-rp-mo-ba4-br100',
      review:
        "⭐We recently moved from Auckland to Wellington and chose Comfort Movers for the job.⭐ From start to finish, our experience with them was outstanding. ⭐The booking process was straightforward, and easy.\n⭐They even came in person to assess our belongings and provide a detailed and accurate quote.\n\n⭐They were highly efficient, carefully wrapping and stacking all our belongings to ensure nothing would be damaged during the move. ⭐Their professionalism and attention to detail were evident throughout the entire process.⭐The move itself went smoothly, and all our items arrived in Wellington in perfect condition.💯\n\n⭐The team even helped us place the furniture and heavy items exactly where we wanted it in our new home.⭐ For the exceptional service they provided, the cost was very affordable. ⭐We are extremely satisfied with Harsimran and his team's service and would highly recommend Comfort Movers to anyone in need of reliable and professional moving services. They truly made our move stress-free and easy ⭐⭐⭐⭐⭐❤️",
      rating: 5,
    },
    {
      name: 'Deb Jenkins',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIQpQ-U9ImAlAdYKXT1K5VKzxosfjWSPghlsQMhHnOuoicMQA=w72-h72-p-rp-mo-br100',
      review:
        "I cannot thank Comfort Movers enough! Our original movers were a no-show, and we were in a complete panic. We called Comfort Movers, and they immediately understood our situation and squeezed us in for a last-minute job. Not only did they save the day, but their team was absolutely awesome.\n​A special shout-out to Simran, who was incredibly kind and gave us helpful tips to save money before the crew even arrived. The entire team was professional, fast, and took great care of our belongings. They turned a stressful disaster into a smooth and easy move. I'm so grateful for their compassion and excellent service. Highly, highly recommend! Thankyou",
      rating: 5,
    },
    {
      name: 'Daniel Hertzke',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJK4BUwB7GtHan_rwFNNTgb-aMXvYydjcRpWPdck2U-fxNDVw=w72-h72-p-rp-mo-br100',
      review:
        'I had a fantastic experience with Comfort Movers! They helped us move all our furniture and belongings back into the right rooms after we had new carpet laid. The team was punctual, professional, and handled everything with care. I highly recommend them for anyone in need of moving services!',
      rating: 5,
    },
    {
      name: 'Robyn Forryan',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKm_h2roNnmz4Q3-npAUkGXLtpSpQvg-NG-K_2HvgybTw6gUg=w72-h72-p-rp-mo-br100',
      review:
        'Comfort Movers moved me a couple of weeks ago and it was a great experience. The communication was excellent, the guys took incredible care with my furniture and I was really impressed with the follow-up call to make sure everything had gone smoothly. I highly recommend Comfort Movers.',
      rating: 5,
    },
    {
      name: 'Malvina McGuire',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKZ9FXW0KlNF7C-GVXf5cYWTljcKTjMkTfqtivcXy2ozQTpBA=w72-h72-p-rp-mo-br100',
      review:
        "I can't recommend Comfort Movers highly enough! Our recent move from Auckland to Wanaka was handled with exceptional efficiency and care. Remarkably, the entire move was arranged in just one day, from initial communication to packing and …",
      rating: 5,
    },
    {
      name: 'Fatemah Al',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIeD2XvKv6AaI68Om_ee6ArthEQ6I8qA_ffTFeQ3BzGJETmgg=w72-h72-p-rp-mo-br100',
      review:
        'Comfort movers are life savers! We had another moving company not show up on our moving day and it really was a struggle. I reached out to Simran at Comfort Movers and explained the situation and he offered to help right away and showed up …',
      rating: 5,
    },
    {
      name: 'Sanaya Doctor',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUBQ6lL52HNmpU9JLghcM1GGU0-fekhXIosFBHUOOppgEvn92Y=w72-h72-p-rp-mo-br100',
      review:
        'The boys were very diligent and took great care with all my items. They were efficient and worked very hard. I could not have done it without them. All communication was very thorough and prompt. Thank you for your help 🙏 …',
      rating: 5,
    },
    {
      name: 'Richard Wijaya Setianegara',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJRMYsoSqR2T-8L6t49q1Rl-MD-aBNV93SZmYmcvo9s-YKiwQ=w72-h72-p-rp-mo-br100',
      review:
        'Simran and the team helped me move several of my items from New Plymouth to Christchurch. Despite the short notice from me, they managed to pick up and deliver everything promptly. …',
      rating: 5,
    },
    {
      name: 'Juliana Baldessarini',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjU1iXCcZxs1V5G397sYqhePYViSePVWH5SmJYxMQme47YJ0pHyC=w72-h72-p-rp-mo-ba2-br100',
      review:
        'If you are care about the handling of your things, don’t look further - Simran and his team are your go to. They may not the cheapest but definitely the best. …',
      rating: 5,
    },
    {
      name: 'saurabh vats',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIDhGaBdreVoDlXfIqAup_c9LaJKZdVVOAS342VXcJW7SfZCQ=w72-h72-p-rp-mo-br100',
      review:
        'Exceptional service from Comfort movers! The team was professional, efficient, and courteous. Our move from Auckland to Christchurch was seamless, with zero damages or issues. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Monika S',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXZNR0EZgeNghCqNBLIm_OgJSHdcRC1U_xQuFlflLjWGxxDND6m=w72-h72-p-rp-mo-ba2-br100',
      review:
        'Would highly recommend this company. Clear pricing - no hidden cost. Hourly rate from the time they arrive and leave the property - some companies charge the hourly rate from the time they leave the depot. The two men who came were …',
      rating: 5,
    },
    {
      name: 'Hayley Pratt',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKTo46hjA8KtKU6Nhe0ia0FxPso56AQx3I9QZDcdYs8F0KfuA=w72-h72-p-rp-mo-br100',
      review:
        'Enquired *very* last minute due to another company failing to show up, and they arrived within the hour! Very quick service, handled my items with care, friendly helper/driver!! Great pricing - I will definitely contact them for any future moves! All round great service, thank you so much guys!',
      rating: 5,
    },
    {
      name: 'MVJocelyn',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKHEon6_xLNm211aKbNfUY2Q_0-SGBTBspWYkiydr8rk3LziA=w72-h72-p-rp-mo-br100',
      review:
        'The Comfort Movers team were professional, prompt and great communicators. Nothing was a problem, they worked quickly but carefully, and provided excellent service. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Andrew Stewart',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKRYtzVb8DiDTilWNxF-xo5I77zPszN_n22EzUcd_t7iz0S5A=w72-h72-p-rp-mo-br100',
      review:
        'Excellent experience with competitive pricing.   Comfort Movers were very flexible when I needed to wait until the house settlement went through later in the afternoon.   They were very professional and took great care of my furniture and appliances.  Highly recommended.',
      rating: 5,
    },
    {
      name: 'Sunita Kumar',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUscGGr7b0r8pdHRK-LeYVNOJqAhx0kFmfzSTmWfds3W2-wTPlj=w72-h72-p-rp-mo-ba3-br100',
      review:
        'Exceptionally great service from Comfort Movers.\nThere was a huge miscommunication about hourly charges, but the matter was handled so efficiently by the owner. This shows his genuine care about his business …',
      rating: 5,
    },
    {
      name: 'Ka Yee',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXG5_6tR_9Ieg9hzUE6fti_PLD1MOKplewqli1oRGYCLe5tBbN2QA=w72-h72-p-rp-mo-br100',
      review:
        "Simran is easy to deal with even for a short period. He's very flexible and a hard working. Very efficient and client-focus that is why we will give him a 5 star as he deserves it. Thank you Simran for being so accommodating and flexible. Great quality service. 💪🏻👏🏻👍🏻 …",
      rating: 5,
    },
    {
      name: 'reagan strickland',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXVANTUIR6NdA7Z9GbWIQZrbEvBklLgSkWIgYfHlOul6KsReDIK=w72-h72-p-rp-mo-ba2-br100',
      review:
        'Used Comfort movers as was let down from another company, rang Comfort Movers same day and had 2 movers and a huge truck pull up only 1hour later on the same day! They carefully loaded my 3bedroom house and took it to storage unit, they …',
      rating: 5,
    },
    {
      name: 'Drew Cheeseman',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXoJffz6P3q4e5-dSnFvENvI0_HklcxpkPA6warW9VGulrO1cqa=w72-h72-p-rp-mo-ba2-br100',
      review:
        "Great movers. Moved our whole house (with a lot of stuff) with no hassle, packing it in very tight to ensure we didn't need more trucks. Harsimran and his team were friendly and took great care of all our things. …",
      rating: 5,
    },
    {
      name: 'Monique Robins',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVaZpN4e7MbbI80pCz2U73ZwPbRbGfhL6aSO_dMGIDUpHsuMJcl=w72-h72-p-rp-mo-br100',
      review: '⭐⭐⭐⭐⭐ (5/5)\n\nI recently hired Comfort Movers for my house move, and they absolutely exceeded …',
      rating: 5,
    },
    {
      name: 'Ian Haley',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKK4Zed_KoxxXFK91jZSAXe9G9R-td-cehl9ZdKoGAOPonz9E0=w72-h72-p-rp-mo-br100',
      review:
        'An excellent and easy moving experience. We barely had to lift a finger. Very swift and friendly service with a mile wide smile. These guys are just awesome and we would certainly employ them again and recommend them highly for a no worries home removal service.',
      rating: 5,
    },
    {
      name: 'Kaye Bach',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXwDZbPwMz-VugZWYABoCRsbCDE42oEDYUC2jKG92lFji89BEzu=w72-h72-p-rp-mo-ba3-br100',
      review:
        'We have just today moved to a new property and we used Comfort Movers as our furniture transport company. This company was recommended to us by King Storage who see many many furniture removal companies. We could not have been happier. …',
      rating: 5,
    },
    {
      name: 'Reet kaur',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLBH7aIxjFHdogNJDH_m1jMDy57JOAdARMm1dGnFdjhFrCMtA=w72-h72-p-rp-mo-br100',
      review:
        'I received top notch service from comfort movers. Lovely movers followed all the instructions and were punctual, quite polite, ethical, professional, handled all furniture with care. From pick up to delivery, they both listened and asked questions when unsure about something. My experience was awesome highly recommended.',
      rating: 5,
    },
    {
      name: 'Maryna Bouwer',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLayrX42BH_07yr0AlbPuuJzduPRMlwfS7MIpwqMOK_wTzRUA=w72-h72-p-rp-mo-br100',
      review:
        'Truly impressed! What a nice team and so efficient! Perfect for small an big moves and local and further out of Auckland. Our move an hour away went so well. Thank you so much for the great service and support.',
      rating: 5,
    },
    {
      name: 'Kevin Park',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJskg2Ua-mWpGUef7ancQdgWSWlvoQegim1BPs6s6lkFwf_2RA=w72-h72-p-rp-mo-ba3-br100',
      review:
        'We moved today with Comfort Movers. Although it was such a short notice, they fit us in and helped us move today.\nI have to say we were very happy and impressed with their work. Simran and his …',
      rating: 5,
    },
    {
      name: 'Manoj Kumar',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLrqKTZVl575Trt05Ah-dhPHE-foJQkowwrxkxEugTswmhJPnY=w72-h72-p-rp-mo-br100',
      review:
        'We recently moved our contents from Wellington to Whangarei. Harsimran and Bikram did a great job taking care of the process from start to end. Quite impressed with how the goods were stacked in the truck, including wrapping furniture and …',
      rating: 5,
    },
    {
      name: 'Youenn Tallec',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocI2s0oHyAu7OlI4sv1YtLqPolKhY83XPRM-zKrRKaY0GmLWQQ=w72-h72-p-rp-mo-br100',
      review:
        'Comfort Movers moved my house in a highly efficient an professional manner. They handled all our belongings with care and respect.  There was no damage at all and the move was completed quickly.\nMany thanks for such a great job!',
      rating: 5,
    },
    {
      name: 'Ruth McGuire',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJFFIICBQixOD2gfaGGACGDffvYtpE_5Un8HDwCw-p8gqrTXg=w72-h72-p-rp-mo-br100',
      review:
        'Excellent service from Simran and his team at short notice. Picked up contents of a two bed house in Wellington and delivered the next day to Auckland. No damage done, good comunication, pleasant and easy to deal with. Will use again.',
      rating: 5,
    },
    {
      name: 'Don Ramdhari',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVyA9f2deA6JjLML8tSw3dG7NV8JPA0C0Rivf_Qmkh49f1K60Q=w72-h72-p-rp-mo-br100',
      review:
        'I did not initially believe this company’s claims and reviews online, well let me just say how pleasantly surprised I was that it’s all true!!! They were absolutely amazing moving me from a large 6 bedroom home in Albany to Long Bay. I have …',
      rating: 5,
    },
    {
      name: 'Zach Johnson',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXL03WFwTLwzE58xKN-eAgJEFyDbHnwCZEVsBQQjBiWORPTqFYkwg=w72-h72-p-rp-mo-br100',
      review:
        'Started the day with another mover who got date wrong and could not show up. Called Comfort movers and they were willing to come out the same day after finishing another job. Showed up at 2:00 ready to go with two trucks and 5 people. …',
      rating: 5,
    },
    {
      name: 'May Chin',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIQV62f9FaNoa-DN_yn18PXzcHuG4n8aqWQBB5muuYlNS6vcg=w72-h72-p-rp-mo-br100',
      review:
        'My husband & I are very satisfied with the services of Comfort Movers. They truly handled all our belongings with care, no matter how old or new your assets are. Very professional & courteous.staff. Price is reasonable due to the quality of their services. More than happy to recommend them to our friends.',
      rating: 5,
    },
    {
      name: 'rahul uppal',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWJ01nSb1XJsveNDNjjPd9NYAdv4G7CwvjQhq4v4GZf3XxisJvQ=w72-h72-p-rp-mo-ba2-br100',
      review:
        'The team were very courteous, hard working & extremely careful in handling our stuff.\nHoney  in particular stood out for us as he was involved with the pick up & …',
      rating: 5,
    },
    {
      name: 'Katherine Kelly',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjX_g3YCGKBEtEywBNB89HUiAzkSEBKTl9nIlk8gYqugbxBLXItrPQ=w72-h72-p-rp-mo-ba3-br100',
      review:
        'I highly recommend Comfort Movers. Beyond the competitive rates, Simran was personable and flexible in booking me a two hour slot for two people to disassemble a queen brass bed, move it down two floors and reassemble it and then put …',
      rating: 5,
    },
    {
      name: 'Krassie Petrova (Petrova.Krassie)',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVoHSF6wBj9sP59habJ_ahFyl3iHaODSB15zRax6lXd6wzvblWx=w72-h72-p-rp-mo-br100',
      review:
        'Simran and his team were extremely good! I contacted them early in the morning and they did the job on the same day, it was an urgent one for me. Responsive and professional and very helpful . And, very reasonable pricing.  Polite, smiling and hard working! Very highly recommended and wish them good luck.',
      rating: 5,
    },
    {
      name: 'Bonita Mowat',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVUKH9KEqUyjvATmwryTcA05hD4576V8L703Mum9MvHzLGTGWwK=w72-h72-p-rp-mo-br100',
      review:
        'We were very impressed with the team from Comfort Movers. It was reassuring having a reliable company move our furniture safely. They kept us updated throughout the day as we had 2 pick up addresses before meeting us at an address in Mangawhai. Highly recommend.',
      rating: 5,
    },
    {
      name: 'Dean Miller',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVbd1C2mbTJJRi0K5Sg4MFMVefBE3aMPKHQANd922ytGriD4zD4=w72-h72-p-rp-mo-ba3-br100',
      review:
        'I have used a number of different moving companies over the years, but none can compare to Comfort Movers when it comes to careful handling of furniture. Every item with my recent move was carefully handled, wrapped in blankets or protected …',
      rating: 5,
    },
    {
      name: 'Phil',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKhaYzrIaxtvUStspP1VyibFwftBM7ZlSTIveA1A20pFmpt5Q=w72-h72-p-rp-mo-ba4-br100',
      review:
        'Incredibly professional team who moved the contents of our house, garage, and garden within Devonport - two trucks worth, overnight. Excellent service - Highly recommended!!',
      rating: 5,
    },
    {
      name: 'Vera-Lee Vivian',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIly2hQvyzvgfBTrztRt-mux27bKgo15NC5htfzUHVNMd3jiQ=w72-h72-p-rp-mo-ba2-br100',
      review:
        "I only had a few days to try and pack my house with two young kids and a newborn and I'd recently had a c-section so was unable to do any heavy lifting and my mother has health problems but the wonderful team at Comfort Movers went above …",
      rating: 5,
    },
    {
      name: 'Jen',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKM22n-hCKow-PuiBLmX6HqbLoZmMv2G03SJeBD2rO19fBWO4o=w72-h72-p-rp-mo-br100',
      review:
        'You get what you pay for - and we had Simran+2 others for our 3-bed move and they completed it fast and professionally. The team were respectful and hard working and used quality equipment. Simran communicated clearly and timely, and on the …',
      rating: 5,
    },
    {
      name: 'Richard Bartley',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKFGgxuEpUiSj4w_FFuXNI9pHioH3rkW8peVjpFSMPhyOrGpA=w72-h72-p-rp-mo-br100',
      review:
        'Simran and his team did a great job for us moving lounge furniture to different locations. They were timely, efficient, polite and hard working. Would highly recommend.',
      rating: 5,
    },
    {
      name: 'Ben Snelling',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJ0t_6BxeAje8Xlz0Qi6RLZ-rqDcd0iTI-nksuaHQS19LxNJA=w72-h72-p-rp-mo-br100',
      review:
        'Comfort Movers helped us out with an estate move on short notice and worked on a Sunday. They were very polite and professional and took great care of the furniture, would not hesitate to recommend them.',
      rating: 5,
    },
    {
      name: 'vilma ballo-ponsaran',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKElOsFZvUXBVy98iyEq6S_r48NqTfRCarRO3C08m-sM8nYGIQ=w72-h72-p-rp-mo-br100',
      review:
        'Highly recommended. The guys were incredibly efficient and quick with loading and unloading, and managed to use every effective space in the truck. The movers worked nonstop, without breaks, making every second count. …',
      rating: 5,
    },
    {
      name: 'Mohamed Magdy',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVrcrbicfAveAa0ujaA9LbQAbgsGTHCGYdND0uiY2Y5ZXQU-SnL=w72-h72-p-rp-mo-ba2-br100',
      review: 'Friendly Team: A Satisfying Move\n\nI hired this local moving company again due to their proximity and was …',
      rating: 5,
    },
    {
      name: 'Kate Bradley',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIa4rXZHIKWUx83ykYrCEVX2LMmZz-Ia65bEHO6etckb8DhGhI=w72-h72-p-rp-mo-br100',
      review:
        'Great service by a couple of very nice guys. They were very careful and particular with how they placed our furniture. I would highly recommend. Thank you again!',
      rating: 5,
    },
    {
      name: 'Alan Chang',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVqe6wBkTGDvPARje3_EGy5w-8A7BkD40-0T807mA7Rw22sh7EOBw=w72-h72-p-rp-mo-ba3-br100',
      review:
        'First time using them and all the five star  reviews are true. These guys are professional , on time, have good communication and most importantly they do their job with care. They helped mum and dad with their hard to carry and fragile …',
      rating: 5,
    },
    {
      name: 'Kam Thong Chin',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIg7lyxoG6xv3DWjYGK3RW26cxmlW9Hbw3W30c25RIGxAj4hA=w72-h72-p-rp-mo-ba3-br100',
      review:
        "I used Comfort Movers' service 3 weeks ago. I would like to give them 2 thumbs up and five-stars! They are very professional and meticulous. Great work guys. Thank you so much for your help.",
      rating: 5,
    },
    {
      name: 'Almighty Z',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjV2_w3QWUI9pKmleJPGdItc2iLxZtGhcmBoHOHv9OH0IpgjT5YC=w72-h72-p-rp-mo-br100',
      review:
        'The boys have done a very good job helping us moving.\nQuick and very efficient service, will definitely recommend them.',
      rating: 5,
    },
    {
      name: 'George Nurijanian',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUwNipwrpWA3kcyJiPMo-qyRZbOCWuXa_MXYMiES3Lq-izD3tn4=w72-h72-p-rp-mo-ba4-br100',
      review: 'Efficient crew, no problems, handled some tough furniture moving.',
      rating: 5,
    },
    {
      name: 'Singh Gurpreet',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjV57OlHlBu45BlpoaulLAOSk5qn4ge_V33kCA_f3A33irkek-vpUA=w72-h72-p-rp-mo-br100',
      review:
        'Kudos to the Team at Comfort Movers. These people really know the magic of keeping their customers happy. Have an intensive knowledge about handling fragile items and imported furniture. Moved our house hold items absolutely intact. Highly recommended, will surely use their services again. Reliable and affordable furniture movers.',
      rating: 5,
    },
    {
      name: 'Nilesh Motwani',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLncHNJjCsKhzWkKcLuJotb4-2JswOQUvuz_mjSr0jLiXSc0w=w72-h72-p-rp-mo-br100',
      review:
        'Our experience with Comfort Movers was really great. They provide professional services at a resonable cost. The team led by Simran is very efficient. I would highly recommend this company to anyone moving house.',
      rating: 5,
    },
    {
      name: 'James French',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUJeVP1Pgc95FicWZdDihMWXs8AzXJDwE_73c0OKoIB-NI-8zvk=w72-h72-p-rp-mo-br100',
      review:
        'Simran and his team are awesome at what they do. They worked hard to ensure everything was packed safely and ended up in the right place. They are friendly, professional and exceeded our expectations. Would highly recommend them to anyone planning a move.',
      rating: 5,
    },
    {
      name: 'Albert Chang',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIDp49-rxccW8WJZqqWWIkLDvIB6BFL-4-j2PtMyRwfdlTG8yU=w72-h72-p-rp-mo-br100',
      review:
        'These guys are not your regular movers, they are legends in their job.\nSimran and his mate was able to do, not just moving our house but also help moved a couple of our appliances we bought off trade me and added them all into one …',
      rating: 5,
    },
    {
      name: 'A. T.',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXFBFC3yn46X7mdNwhX_kRm4Wg8ju4lgXbgsXIz_Yhc1Q9w0ehv=w72-h72-p-rp-mo-ba3-br100',
      review:
        'Excellent moving company—reliable, professional, extremely experienced. Doesn’t seem like there’s a job they cannot handle.  Simran was very thoughtful and considerate and took good care of our items. Highly recommend.',
      rating: 5,
    },
    {
      name: 'Adi K',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVKmzSCX2GqIkCFm6vB3zwzlJiixhoUN4IS_LXIMQxSvLUyQkF4=w72-h72-p-rp-mo-br100',
      review:
        'Comfort movers are efficient and hardworking people. We used their service the second time, and they have made the intercity move stress free. Simran and his team are professionals and hardworking. If you’re looking for a professional mover Comfort movers are the one to go for. Thanks Simran and team!',
      rating: 5,
    },
    {
      name: 'Diva Gopalan',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJfVZLBhspvC8jXp7r-zeYf5kJ6IfAbdwoYJHirRwoPeheFYw=w72-h72-p-rp-mo-ba2-br100',
      review:
        'Very positive experience with Simran and his team TWICE. Professional when taking bookings, showed up on time, got the job done in a timely manner and great communication. Highly recommended! Will definitely book again if required. A+',
      rating: 5,
    },
    {
      name: 'Tarsinder Singh',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocL_jbOCrhV4ovCC5haXJBsa-7NcIRvMU-K75bIzOvDwgrn83g=w72-h72-p-rp-mo-br100',
      review:
        'Choosing a moving company was really biggest decision for us as we are senior citizens  and we needed support. We tried talking to many moving companies but we were not statisfied as they were only interested in money negotiations. We …',
      rating: 5,
    },
    {
      name: 'Akjot Singh',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocK8POl7aDzwjuKg_r3aDPfHrKaXxtRbEQf7I_0DUbliXBTnvIs=w72-h72-p-rp-mo-br100',
      review:
        'Great service by Harsimran and his colleague. They helped us move in Flat Bush. They were right on time and very fast. Great customer service and amazing quality of work! Would definitely recommend to anyone planning to move!',
      rating: 5,
    },
    {
      name: 'Nives Kolaric-Penman',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWrInio8wgBPXgY7JiZ0IklG8srM8LnX8rq_c9GQGXAok_opKs=w72-h72-p-rp-mo-br100',
      review:
        'Simran and team were awesome! They helped us move to Matakana from South Auckland. The night before they confirmed their ETA and were on time for move in day. They were very polite and easy to talk to. They suggested the best way of doing things and were quick and efficient! Definitely using these guys again next time we move!',
      rating: 5,
    },
    {
      name: 'Abhay Kolhe',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjV02e-vjG_boSnlnDBWuI0wOKv800z2D_cRqtGViiDZkRpsATvi=w72-h72-p-rp-mo-ba2-br100',
      review:
        'The most courteous and hardworking crew who did the moving with utmost care and safety of the goods. Could not have asked for more. Highly recommended. You will not be disappointed',
      rating: 5,
    },
    {
      name: 'Lu Ivy',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUYPHR60NV2U42jHeuaZcHBDtYv8FbOrlvB2Hf-FqUwyd-lluB6=w72-h72-p-rp-mo-br100',
      review:
        'We enjoyed working with Simran and his team! Great communication from the start; the workflow had been smooth and efficient. Simran is experienced and thoughtful - he gave many practical recommendations to maximise efficiency and minimise …',
      rating: 5,
    },
    {
      name: 'PARAMVIR SINGH',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXHFR4wT0Y-y8fjJce2ep5OKJKgjowRicRJV84ofAD_-RXFl_HJ=w72-h72-p-rp-mo-br100',
      review:
        'Simran and junior both were fantastic with moving smiles on their faces and moving was very comfort as their name.\nBest wishes to them …',
      rating: 5,
    },
    {
      name: 'Mejo John',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXGlB6WiFfRXUpDfTQb9wraEpZwcy3h9Iujo4YgPjoj7Jwkv1Mu=w72-h72-p-rp-mo-br100',
      review:
        'Excellent team work and great service from Comfort movers. Very reliable and they had taken every measures to make sure our items are well lifted and shifted. A must recommend service and team.',
      rating: 5,
    },
    {
      name: 'Julyan Collett',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUL_-3HLamdfne22qgBodgNYXs8tw4q2foTj2ggJpRO2fC67fwI=w72-h72-p-rp-mo-br100',
      review:
        'The team was excellent! We relocated our office, the guys turned it all around in a day and worked extremely hard to do so, even took away a lot of our rubbish at the end which saved us a big headache. Communication was great and they were just genuinely nice people, highly recommended!',
      rating: 5,
    },
    {
      name: 'Ben codi',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocK0p7c3eHoUJkStcjlJv1evkvNIO0Y_asbkjHUjCIB8FvKpTw=w72-h72-p-rp-mo-br100',
      review:
        'The guys who are their name were Simran , Bikram and jazz who is working for this company, were really good at their job and very professional. Thank you very much.',
      rating: 5,
    },
    {
      name: 'Chainers Calleri',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJoPB5PKaWlD11m6JQgIIl_j9cx8jblUwrlH-Ux13G_1CEFEg=w72-h72-p-rp-mo-br100',
      review:
        'We used comfort movers to help transport a bed we purchased off Trademe. They acted professionally despite a challenging situation at the pick up location. Delivered the bed to our place went above and beyond. Highly recommend.',
      rating: 5,
    },
    {
      name: 'John Preuss',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWonXdlJ9Z3A666S-eaHktEUxDJF_nOCYEZWcAn9zyVqdSXhGiiCQ=w72-h72-p-rp-mo-ba3-br100',
      review:
        'Comfort movers was engaged to move house. The move included various fragile items and large furniture as well as sentimental religious items. …',
      rating: 5,
    },
    {
      name: 'Mike Atkinson',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjV1F74Ab_0h5yroCz6M5xwfOqoS1R-29VbChoLRv_FBeMUEU8Ic=w72-h72-p-rp-mo-ba3-br100',
      review:
        'My parents had not moved in over 25 years and Comfort movers were just who we needed. They were not only great movers but they were extremely kind and understanding of what my parents were going through. I will definitely use them again on my next move.',
      rating: 5,
    },
    {
      name: 'Photographer Gaming',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVaP3gQrgK-Urh2IYHX8PO0XW8T8vZgvH0WwfObFuTSxphuc7sEjA=w72-h72-p-rp-mo-ba3-br100',
      review:
        'My First & The Best Experience with Harsimran and Team 🤙🏼👍🏼..... If you need to move without any hassle, give these guys a call, I reckon they are quite reasonable in pricing as well, considering the amount of stress that is taken care of …',
      rating: 5,
    },
    {
      name: 'karan Singh',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLOz49X2ZK1wbtL7Kg5D1oifqdXxeSbU_htteSbbEVeO8Jp7Q=w72-h72-p-rp-mo-br100',
      review:
        '‘Very efficient, picked up item at time specified and delivered quickly. Pleasant, friendly attitude from the two delivery men. Reasonable Price. Would use Comfort Movers again if I get a chance',
      rating: 5,
    },
    {
      name: 'Chantel Goodman',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocK4cPuLlH0IitzM3jC1oucN2H_IvhFDp7gN5fqWqqiwEZh_MT9p=w72-h72-p-rp-mo-br100',
      review:
        'Best movers we have ever used. They took great care of all our belongings. Would definitely use again. Thanks Simran and team!',
      rating: 5,
    },
    {
      name: 'Maysar Rose',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXB8qRFfAFJHYXefPEm_WuUUwldtMMAcB0PHji7j06OiqNEVAmp=w72-h72-p-rp-mo-br100',
      review:
        'Impressed with Comfort Movers! Punctual, excellent communication, friendly and polite staff, quick and efficient move. Made the process stress-free. Highly recommended!',
      rating: 5,
    },
    {
      name: 'SteveKB100',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUW5b3Yt3DjbfPmmyGU4Kj7l0P7nyehQikjFsh6SOXEbFhC6CI=w72-h72-p-rp-mo-br100',
      review: 'Great company to deal with. The movers did a great job wrapping and taking care of everything. 10/10.',
      rating: 5,
    },
    {
      name: 'J and G Dobbs',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKVsVU8BmDMt3v5YkrGj-UmNOB5ZMyomWfCBLAoVsfG2iP0vw=w72-h72-p-rp-mo-br100',
      review:
        'The moment  I contacted   Comfort Movers the it was a pleasures  to do business with  them,took the Hassel away from moving,the two men we the two men we had never stopped  .will happy recomend Comfort Movers.',
      rating: 5,
    },
    {
      name: 'Jaime Ritchie',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVpk3-ylatq0e4OyYQ1u-0ynpStaXJLvniV4KjQnNmS4PZlbZ12=w72-h72-p-rp-mo-ba2-br100',
      review:
        'Simran & Singh were just the best. I highly recommend using this moving company. Excellent communication during these lockown times as well. I will definitely use again in the future.',
      rating: 5,
    },
    {
      name: 'Preet Singh',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJWqVl9nuKmI3dRvWVRKyC0BNvobXzo92HQYnfEhxHm1t5wgw=w72-h72-p-rp-mo-br100',
      review:
        'Guys did an excellent job moving me to a new house, pure professionalism seamless and issueless transfer in reasonable price. Guys even made productive suggestions regarding placement of furniture to make most out of my vaccant space. Top notch',
      rating: 5,
    },
    {
      name: 'Natasha Botha',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIM6tEcQ-Q3TtJGT3XiushwchKQx837jcn4QX_wG7LV6MZQzw=w72-h72-p-rp-mo-ba2-br100',
      review: 'Simran went out of his way to help us. Was last minute move and he jumped in and assist. Amazing service.',
      rating: 5,
    },
    {
      name: 'Kylie Jones',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjW1Ds1R5ebBhL-KVteSrGKY4kDL2MUdEXtpx3ulL5kJm64_g9OD=w72-h72-p-rp-mo-br100',
      review:
        'Awesome experience. Very efficient and careful with everything. Friendly and on time. Thank you for making the move nice and stressless.',
      rating: 5,
    },
    {
      name: 'Q.O.H',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVcpTqEN-R_NIj7COJLBk3MDwHAMgrEHSEXqJPK6-mkm9bzx38F=w72-h72-p-rp-mo-br100',
      review:
        '✨Great value for your money✨very affordable prices for 2 men and truck✨delivery was swift and the guys are kind and friendly✨day before booking and at your own timing✨customer service staff were accommodating and professional✨worth every …',
      rating: 5,
    },
    {
      name: 'Katy Relph',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVXATVguVt1j15XvFZoRXhac0rQmvp-8D3WodFowtlApOno5nI=w72-h72-p-rp-mo-br100',
      review: 'Great service, super friendly and helpful! Would 100% recommend comfort movers!',
      rating: 5,
    },
    {
      name: 'Kathy Hutchinson',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocK1DQqN978x16YBJ_JXoBUYsmbpOTIbibLyTWcOtbms7ODX0g=w72-h72-p-rp-mo-br100',
      review: 'I highly recommend Comfort Movers.',
      rating: 5,
    },
    {
      name: 'Radhika Hebbatam',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKePTp1bB-rXCLa7mreklI0SPmquGeVuBTeUUCUOf4Y15-A2w=w72-h72-p-rp-mo-br100',
      review:
        'We moved our things with comfort movers.Everything went very smooth and fast.They we’re immediate to respond the query,and flexible with availability.The team came on time and did great job.Highly recommend for moving.Thank you.',
      rating: 5,
    },
    {
      name: 'Maan',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKRP0iaMx8j-jkH21vk8ozjEqcC-TIa2C3ENvrJ1RRgFmI29zA=w72-h72-p-rp-mo-br100',
      review:
        'Harsimran is genuine kind humble person with professional approach towards your services. Definitely highly recommendable service',
      rating: 5,
    },
    {
      name: 'Mario Kiss',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjX_f-qieIl5r2h671X5YgGk2VtXz7U0ofSAs14F4z3LtIz6be6Y=w72-h72-p-rp-mo-ba3-br100',
      review:
        'They were very easy to book, and their price was very affordable. The team also worked very quick and were very polite.',
      rating: 5,
    },
    {
      name: 'Kshitendra Gautam',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocILP7U-fvuoIOOqSvgs_rnl7svnn_YtjgSApS1KXg4n9D9xAg=w72-h72-p-rp-mo-br100',
      review:
        'Quality service at reasonable rates. the guys are really professional, I was given a confirmation call and the packing was quick and nothing came out scuffed and busted. An overall great experience.',
      rating: 5,
    },
    {
      name: 'Chris Bale',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIGse-Yn0C9Hb65jdpbHI9U4Munv4hi3FieLemmDBu0-nWOwQ=w72-h72-p-rp-mo-br100',
      review:
        'Fantastic experience with the team, from the moment I made contact to the final box being unloaded. Nothing but great service, communication and professionalism. Highly recommend.',
      rating: 5,
    },
    {
      name: 'Jasmeet Saluja',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKTEa8mvfn_1WTDaOqaPvnwj1By5L63NoTJiBOT-tkSu9aLig=w72-h72-p-rp-mo-br100',
      review:
        'I highly recommend Comfort movers for their excellent work, service and specially punctuality.The guys came on time and finished the work on time. Thanks Comfort movers team.',
      rating: 5,
    },
    {
      name: 'Michelle Sinclair',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJ6v_jtIHJHzBTWKrMmyVmcVs3zOMq4booZ9D6o9hegAKWVmQ=w72-h72-p-rp-mo-br100',
      review:
        'What a wonderful experience from start to finish - the guys were fabulous - they knew their stuff and northing was too hard -thank you Comfort Movers.',
      rating: 5,
    },
    {
      name: 'Jana Laholova',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWvu77O-ZeWDigS5w9vCYg8BCu0hbOIFum_NZeZRdL_2RY61DbkFA=w72-h72-p-rp-mo-ba3-br100',
      review:
        'We have been bit challenging move and Comfort movers manage all well and done good job, good timing ,professional ,friendly team .Thank you  ...in short notice as well :)',
      rating: 5,
    },
    {
      name: 'David Thornber',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIbDLYYJ6fIZgSdJmIQaRewWrQ8eMmaf5PMdY64A8n_QiadEA=w72-h72-p-rp-mo-br100',
      review: 'They took great care with our possessions.  They were courteous and very helpful.  Highly recommended.',
      rating: 5,
    },
    {
      name: 'Vinay Sharma',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUOxrOkR9NJoKvyEgswNJNQgklVa200CGLmVn57aF_BvacRaxQ=w72-h72-p-rp-mo-br100',
      review:
        'Trust me hiring them was best thing i did on move they were quick to response affordable and went extra mile to make our relocation easy and hassle free.\nBloody  good chaps making life easy and  taking stress out of moving',
      rating: 5,
    },
    {
      name: 'Lyle Jones',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLOf1f80k4IX5KzCg18dYRRsaIGVukYGcH6YjB1Rx65Rj0iMw=w72-h72-p-rp-mo-br100',
      review: 'The Team at Comfort Movers were great to deal with, very efficient, accommodating and great value.',
      rating: 5,
    },
    {
      name: 'Mil Strate',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJkMBb9gQJzAD03bMY36JuOE5_ZADwbH49CvT9gAHatmv6fOg=w72-h72-p-rp-mo-br100',
      review:
        'Very efficient, proactive team! Shoutout and special thanks to Tarsem ang Singh for going above and beyond with the move.',
      rating: 5,
    },
    {
      name: 'Danielle Cook',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWDBe9drA6lLkDsrDsYio6rcTAyaT30rxgdVbiwxQTI5w4AeEg=w72-h72-p-rp-mo-br100',
      review: 'Comfort Movers did an excellent job, really professional. I highly recommend them.',
      rating: 5,
    },
    {
      name: 'paramjeet singh',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJtYGJAFkwA8P7mwAtIYxCdhhVo4kod9PskwXCudhYGadvd2w=w72-h72-p-rp-mo-br100',
      review: 'Friendly, competitive price, very helpful and on time. Fragile Goods were taken good care.',
      rating: 5,
    },
    {
      name: 'Benjamin Clark',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXVWqDCnITOXlz0vz7MIhdNhK3L8UZcDXeaGoN5C8oaDF4P8fsC=w72-h72-p-rp-mo-br100',
      review: 'Took amazing care of my desk and moped. Really kind and great crew',
      rating: 5,
    },
    {
      name: 'Amanda Nettleton',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIQusn8Dsq1QHQCHww70Imnlf5U_bWi0FUQOCH-757kF_aqBA=w72-h72-p-rp-mo-br100',
      review:
        'These guys were amazing.  They turned up on time and went over and above what was needed.  Would absolutely recommend them to others.  Thanks for making a stressful day easier.',
      rating: 5,
    },
    {
      name: 'Sunil Raj',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJmGF0wgecrCW1KLsCPrBnoun_HFiP_CzfErBRuJ4iMd0O9_w=w72-h72-p-rp-mo-ba3-br100',
      review:
        "All the boxes tic. On time, didn't miss anything, everything packed perfect and helped to get it to move into place once at our new home. Was super delighted.",
      rating: 5,
    },
    {
      name: 'Sam Brooks',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLesJ_mG5_z44m9fcn_HGggc5RIKYxb-BrIpO7GTAPnbqkFnw=w72-h72-p-rp-mo-br100',
      review: 'Awesome team, quick efficient, handled with care and nice people 👍 will use again! …',
      rating: 5,
    },
    {
      name: 'Chirath Dealwis',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjV78KlP1rQc3Do-EiOeCU9cgGRCTybLg-4q5jhcEjlE5d4I38Jo=w72-h72-p-rp-mo-br100',
      review: 'Great service. Professionals in their subject. Thank you for your service on my family move!',
      rating: 5,
    },
    {
      name: 'Kate Bromfield',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVfGandWDOOERNzkwNZLIqIpaQiQSRovPtcq6GdViNpyIilqnSw=w72-h72-p-rp-mo-ba2-br100',
      review:
        'The team were really flexible and responsive. The lads on the day were polite and professional and really efficient.',
      rating: 5,
    },
    {
      name: 'Tracey Milford',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLGL2P4zQCZ_Ywc35HGM1DcXMd2_OePY6UJlAjHIvF2Fbj5Ww=w72-h72-p-rp-mo-ba3-br100',
      review: 'I would highly recommend Comfort Movers, great team and very professional.',
      rating: 5,
    },
    {
      name: 'Nicole Vogts',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLFN3kIsb3IGPB44HMizFZg6bcWur6DhMwcq5wGPTzsswgU5A=w72-h72-p-rp-mo-br100',
      review:
        'They did an amazing job - team was professional and careful and communication was excellent. Would use again.',
      rating: 5,
    },
    {
      name: 'satinder jayia',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjX4k5mS7PsUGcqTmjeXK6BrIhzLR9lDYCIBYGMSyWnNG9MDvX-XJw=w72-h72-p-rp-mo-ba2-br100',
      review:
        'Very good service and no damage. Men very courteous hardworking and professional. Helpful and nothing too much to ask. Great team.',
      rating: 5,
    },
    {
      name: 'vinod malik',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVTLaO0SrKvpE0TJRvw0wd48rSG5A9uR11rRxbGQpjE_LuIOuXn=w72-h72-p-rp-mo-ba3-br100',
      review:
        'one of the best movers in town it so simple and easy process and the staff is really helpfull, amazing\nthank you',
      rating: 5,
    },
    {
      name: 'Inder Sandhu',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIEdI0eZWVM0l2mXXDOgu3gvKXDWd0msPacwvMREOObSxtShg=w72-h72-p-rp-mo-br100',
      review: 'we had 100% positive experience from comfort movers team.\nthey really look after your stuff',
      rating: 5,
    },
    {
      name: 'Fiona Huang',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKfzNOKW6WUXFd-zE8Eoomt8IRtDVyaUCa10h4rMFAccZelVQ=w72-h72-p-rp-mo-br100',
      review: 'The packaging was careful and the installation went smoothly. The people are very kind.',
      rating: 5,
    },
    {
      name: 'Reet',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocK8ml-JerHyDTyk7reZmIMB0F_7ElKTY3I7Z9YtM7jHW3gYiA=w72-h72-p-rp-mo-ba3-br100',
      review: 'Lovely guys. Organised and harworking and detail oriented. Highly recommend.',
      rating: 5,
    },
    {
      name: 'Stefanie Ross',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocL44iMNQ6w4GEmfxydZsJ2AIyfHdyP657k7b2iLKcJZWDwHWWc=w72-h72-p-rp-mo-br100',
      review:
        'Requested a very short notice courier service and was impressed with the speedy & professional service at a busy time of the year!',
      rating: 5,
    },
    {
      name: 'Chelsea Drury',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLsFOYsqeZoTQRGzBnXVZyZKToZrqlTGcmyKU_KB69PaBPt6w=w72-h72-p-rp-mo-br100',
      review: 'Highly recommend Comfort Movers, excellent customer service and a quick and easy move. :)',
      rating: 5,
    },
    {
      name: 'Naam Ke Vapari',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXON5HFqFxnPFG9Su0eqNq98Ku8O_PzxZddN3TaVSfv1S2RxRrW=w72-h72-p-rp-mo-br100',
      review: 'Very good service and no damage. Men very courteous hardworking and professional.',
      rating: 5,
    },
    {
      name: 'Jasmine Milas',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJsan7rfBNoJSrh98oGR6RrAWTADsu93EErM7WbG17S1w2NqQ=w72-h72-p-rp-mo-br100',
      review: 'Made moving house very stress free! Thanks again for the amazing help',
      rating: 5,
    },
    {
      name: 'elva shi',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJsj8IgVCisVqkrVjjLw24gVScrefRnX5OgAUdBKnW5j-y7hg=w72-h72-p-rp-mo-br100',
      review: 'Excellent service, easy to communicate with. Highly recommend! Thanks',
      rating: 5,
    },
    {
      name: 'veronica ARQUATI',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjW95BClfvk3CmvmO9I--8y0wBHk_xiiVb_4O99BRyYdmo5WfgQ=w72-h72-p-rp-mo-br100',
      review: 'great people,on time and vert accommodating',
      rating: 5,
    },
    {
      name: 'Brenny',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjW_ncSA1QQCBjd_JC__hJwY9FZOw75GIboWuZaSJcLZuwnF4dE=w72-h72-p-rp-mo-br100',
      review: 'Great service, very friendly and professional, fast and organised.',
      rating: 5,
    },
    {
      name: 'Deepi Monu',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLABvMqQems4SWIG3B3VXjKu5bP2KrEAW7DVsxzdaMKg8mj5w=w72-h72-p-rp-mo-br100',
      review: 'Very nice service they r very helpful friendly behavior highly recommended',
      rating: 5,
    },
    {
      name: 'manisha mittal',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWHpeGbXH4Pufvc_OOLpO3jURPLgV0znuYXGdR2qUvdecbx4a4=w72-h72-p-rp-mo-br100',
      review: 'Great service, very reliable and great attitude, would recommend again and again',
      rating: 5,
    },
    {
      name: 'Monique Dykstra',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVgeaghAojqk2JBGChS2xYobFg366cDYNh0GavRTC8Expwe-kHa=w72-h72-p-rp-mo-br100',
      review: 'Amazing experience. So professional and careful!',
      rating: 5,
    },
    {
      name: 'Bahar Baharloo',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUmY7doq2RiU_IJkhfkYdPVdMYccekg_NTkhTcMn9-Qit2T3WjS=w72-h72-p-rp-mo-br100',
      review: 'Very professional in handling the stuff friendly and nice guys.',
      rating: 5,
    },
    {
      name: 'Sam Sung',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocLwjiDTDnMGkZ0m9vFAiMFxKBXnQlwop-oCJkJdaqoRHsreQg=w72-h72-p-rp-mo-br100',
      review: 'Efficient, Good communication and resourceful\nWould highly recommend A++',
      rating: 5,
    },
    {
      name: 'B T',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocIMtlNisKdzm2yw2BjyM8hQ_I5VQv9vLbrmDzOFMDjdetVsfg=w72-h72-p-rp-mo-ba3-br100',
      review: 'Good Work Simran, Keep it up!',
      rating: 5,
    },
    {
      name: 'tendayi tembo',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocL3rrxeFVGivXeWyRR-rzkpJxf6oaYc2WrL-DpWaCMNnnQbEA=w72-h72-p-rp-mo-br100',
      review: 'Good, fast, reliable service. No damage to any goods.',
      rating: 5,
    },
    {
      name: 'FFUNHOURS',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVeQM4BjOxLFrt5LKgqsMxK3YWPKZNj5uDSpQLa7wSmXdB46uY=w72-h72-p-rp-mo-ba4-br100',
      review: 'Nice work',
      rating: 5,
    },
    {
      name: 'Sadaf Fatima',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJmin50I7OGhQXlRxHHjc98zAEXXl5dxAy64NvcwS3ryzA2VQ=w72-h72-p-rp-mo-br100',
      review: 'Very efficient',
      rating: 5,
    },
    {
      name: 'Nguyen Tin',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKv2bMg4m-F5J8gwdd6qlWLiusHJe0d1aiCPWwD7h6wQ6pnEQ=w72-h72-p-rp-mo-br100',
      review: 'Hi Nguyen\nThank you for giving us ⭐️⭐️⭐️⭐️⭐️',
      rating: 5,
    },
    {
      name: 'Kamaldeep Kaur',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXsxRTVSpWETyk9ck-PMU1gJ5QcfMxEi-Ivy-JwnXq32ZSqYSTi=w72-h72-p-rp-mo-ba2-br100',
      review: 'Thanks Kamaldeep Kaur for the feedback.',
      rating: 5,
    },
    {
      name: 'Reshma Desai',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJJTiUe0JYGxNiqcL3T_Qw-lZrLDbeMSnjDhYziz3bABgiTMJQT=w72-h72-p-rp-mo-br100',
      review: 'Thank you Reshma for leaving 5 stars. Feel free to Get in touch if you need us again.',
      rating: 5,
    },
    {
      name: 'Jonny Clarke',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXNoRA4WUmoFpFFTTG3nSEOamGOkXtNUtQiz-o9hobvB0idTsZw=w72-h72-p-rp-mo-br100',
      review:
        'Thank you so much Jonny for 5 stars\nWe will keep up our good work\nCongratulations buddy for your beautiful house 🏠 …',
      rating: 5,
    },
    {
      name: 'Gaurav Gill',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXnQMuPR3p-78Y0mkqTD0fuzzPAev-20AtZOSXDTLfvbxp0kpoFeg=w72-h72-p-rp-mo-br100',
      review: '👍 …',
      rating: 5,
    },
    {
      name: 'jass singh wehgal',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUGJ-2xDDPYhmW6-Y5YiY999mXldcpdf4HCXEAME0GMb0YgP2aT=w72-h72-p-rp-mo-br100',
      review: 'Thank you',
      rating: 5,
    },
    {
      name: 'Tom Gray',
      avatarURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVpixPGQbJm1-lWXwA34fPuvLUEc41j3zipurr_TmrmkxQaQhnB=w72-h72-p-rp-mo-br100',
      review: null,
      rating: 5,
    },
    {
      name: 'احمد احمد',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJSw0kQ41zSCA1-uj24YdqyPufHJ05Xp1SJ5JVs-ltZhdxpWQ=w72-h72-p-rp-mo-br100',
      review: null,
      rating: 5,
    },
    {
      name: 'jeet kiran',
      avatarURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJWF_Ttf-DLMa8VIrFuEx_akdFmnnfTEXA26WQP2q_HUjix0wGJ=w72-h72-p-rp-mo-ba3-br100',
      review:
        "Thank you Jeet for giving us shining stars.\n\nWe're so glad to hear that you had an excellent experience with our team and … More",
      rating: 5,
    },
  ],
];

const LEFT_COUNT = 2;
const MIDDLE_COUNT = 3;
const RIGHT_COUNT = 2;

function normalizeReviews(data) {
  if (!Array.isArray(data)) return [];
  if (Array.isArray(data[0])) {
    const flat = [];
    data.forEach(group => {
      if (Array.isArray(group)) group.forEach(r => flat.push(r));
    });
    return flat;
  }
  return data.slice();
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isLongReview(r) {
  if (!r || !r.review) return false;
  return r.review.trim().length > 180;
}

function createDynamicReviewCard(r, type) {
  const card = document.createElement('div');
  card.className = 'dynamic-review-card';

  const textClass =
    type === 'long' ? 'review-text review-text-long' : 'review-text review-text-short';

  card.innerHTML = `
    <img src="img/quotes-icon.png" class="quote-icon" />

    <h6 class="${textClass}">“${r.review}”</h6>

    <hr />

    <div class="review-user-box">
      <img src="${r.avatarURL || 'img/review-1.png'}" />
      <div class="review-user-info">
        <h5 class="review-user-name">${r.name}</h5>
        <h5 class="review-user-location">
          <small class="fa fa-star"></small> ${r.rating}
        </h5>
      </div>
    </div>
  `;

  return card;
}

function renderDynamicReviews(rawData) {
  const container = document.getElementById('dynamic-reviews-container');
  if (!container) return;

  container.innerHTML = '';

  const all = normalizeReviews(rawData).filter(
    r => r && r.review && String(r.review).trim() !== ''
  );
  if (!all.length) return;

  const shuffled = shuffleArray(all);

  const long = shuffled.filter(isLongReview);

  const left = long.slice(0, LEFT_COUNT);
  const right = long.slice(LEFT_COUNT, LEFT_COUNT + RIGHT_COUNT);

  const used = [...left, ...right];
  const remaining = shuffled.filter(r => !used.includes(r));

  while (left.length < LEFT_COUNT && remaining.length) left.push(remaining.shift());
  while (right.length < RIGHT_COUNT && remaining.length) right.push(remaining.shift());

  const middle = remaining.slice(0, MIDDLE_COUNT);

  const leftCol = document.createElement('div');
  leftCol.className = 'dynamic-reviews-column';

  const middleCol = document.createElement('div');
  middleCol.className = 'dynamic-reviews-column dynamic-reviews-column--middle';

  const rightCol = document.createElement('div');
  rightCol.className = 'dynamic-reviews-column';

  container.appendChild(leftCol);
  container.appendChild(middleCol);
  container.appendChild(rightCol);

  left.forEach(r => leftCol.appendChild(createDynamicReviewCard(r, 'long')));
  middle.forEach(r => middleCol.appendChild(createDynamicReviewCard(r, 'short')));
  right.forEach(r => rightCol.appendChild(createDynamicReviewCard(r, 'long')));
}

document.addEventListener('DOMContentLoaded', function () {
  renderDynamicReviews(reviews);
});
