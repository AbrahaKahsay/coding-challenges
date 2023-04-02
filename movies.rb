movies = {
    lost: 8,
    pb: 7,
    notebook: 6,
  }
  
  puts "What do you want to do?"
  choice = gets.chomp
  
  case choice
    when "add"
     puts "Please enter the title of the movie?"
     title = gets.chomp.to_sym
     puts "Please add the rating of the movie?"
     rating = gets.chomp.to_i
     if movies[title] == nil
     movies[title] = rating
     else 
      puts "The movie already exists"
      end
    when "update"
      puts "Please enter the title of the movie?"
      title = gets.chomp.to_sym
      if movies[title] == nil
        puts "This is error"
        else
          puts "Enter the new rating?"
          rating = gets.chomp.to_i
          movies[title] = rating
        end
    when "display"
      movies.each {|title, rating| puts "#{title}: #{rating}"}
    when "delete"
      puts "What is the title of the movie to be removed?"
      title = gets.chomp.to_sym
      if movies[title] == nil
        puts "This is error!"
        else 
        movies.delete(title)
        end
    else 
      puts "Error!"
  end